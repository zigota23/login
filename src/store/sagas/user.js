import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import { setError, setLoading } from "../actions/status";
import { setDataUser } from "../actions/user";
import {
  DELETEUSER,
  GETUSER,
  LOGIN,
  LOGOUT,
  RENEWTOKEN,
  SETDATAUSER,
  SIGNUP,
  USERUPDATE,
} from "../actionTypes/user";
import { userApi } from "../services/user";


/* Worker */

function* userDelete(action) {
  try {
    yield put(setLoading(true));
    const data = yield call(userApi.userDelete);
    if (data.status === 200) {
      yield put({
        type: SETDATAUSER,
        data: { first_name: "", last_name: "", email: "" },
      });
      action.payload.navigate("/login");
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error))
  } finally {
    yield put(setLoading(false));
  }
}

function* getUser() {
  try {
    yield put(setLoading(true));
    const data = yield call(userApi.getMe);

    if (data.status === 200) {
      const { first_name, last_name, email } = data.data;
      yield put({
        type: SETDATAUSER,
        data: { first_name, last_name, email },
      });
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error))
  } finally {
    yield put(setLoading(false));
  }
}

function* loginUser(action) {
  try {
    yield put(setLoading(true));
    const { email, password, checkbox } = action.payload;
    const data = yield call(userApi.login, { email, password });
    
    if (data.status === 200) {
      const { first_name, last_name, email } = data.data.user;
      yield put({
        type: SETDATAUSER,
        data: { first_name, last_name, email },
      });
      localStorage.setItem("token", data.data.accessToken);
      action.payload.navigate("/");
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error.message))
  } finally {
    yield put(setLoading(false));
  }
}

function* logoutUser(action) {
  try {
    yield put(setLoading(true));
    const data = yield call(userApi.logout);
    if (data.status === 200) {
      yield put({
        type: SETDATAUSER,
        data: { email: "", first_name: "", last_name: "" },
      });
      localStorage.removeItem("token");
      action.payload.navigate("/login");
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error))
  } finally {
    yield put(setLoading(false));
  }
}

function* renewToken(action) {
  try {
    yield put(setLoading(true));
    const data = yield call(userApi.renewToken);
    if (data.status === 200)
      localStorage.setItem("token", data.data.accessToken);
  } catch (error) {
    console.log(error);
    yield put(setError(error))
  } finally {
    yield put(setLoading(false));
  }
}

function* singUpUser(action) {
  try {
    yield put(setLoading(true));
    const { first_name, last_name, email, password } = action.payload;
    const data = yield call(userApi.signup, {
      first_name,
      last_name,
      email,
      password,
    });
    if (data.status === 201) {
      const {first_name, last_name, email } = data.data.user;
      
      yield put({
        type: SETDATAUSER,
        data: { first_name, last_name, email },
      });
      localStorage.setItem("token", data.data.accessToken);
      action.payload.navigate("/");
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error.message))
  } finally {
    yield put(setLoading(false));
  }
}

function* userUpdate(action) {
  try {
    yield put(setLoading(true));
    const { first_name, last_name, email } = action.payload;
    const data = yield call(userApi.userUpdate, { first_name, last_name, email });
    if (data.status === 200) {
      const { first_name, last_name, email } = data.data.updatedUser;
      yield put({ type: SETDATAUSER, data: { first_name, last_name, email } });
      action.payload.navigate("/profile");
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error))
  } finally {
    yield put(setLoading(false));
  }
}

/* Watchers */

function* watchDeleteUserSaga() {
  yield takeLatest(DELETEUSER, userDelete);
}

function* watchGetUserSaga() {
  yield takeLatest(GETUSER, getUser);
}

function* watchUpdateUserSaga() {
  yield takeLatest(USERUPDATE, userUpdate);
}

function* watchSignUpSaga() {
  yield takeLatest(SIGNUP, singUpUser);
}
function* watchRenewTokenSaga() {
  yield takeLatest(RENEWTOKEN, renewToken);
}

function* watchLogoutSaga() {
  yield takeLatest(LOGOUT, logoutUser);
}

function* watchLoginSaga() {
  yield takeLatest(LOGIN, loginUser);
}

export default function* userSaga() {
  yield all([
    watchDeleteUserSaga(),
    watchGetUserSaga(),
    watchUpdateUserSaga(),
    watchSignUpSaga(),
    watchRenewTokenSaga(),
    watchLogoutSaga(),
    watchLoginSaga(),
  ]);
}
