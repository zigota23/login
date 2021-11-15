import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import { setLoading } from "../actions/status";
import { setError } from "../actions/status";
import {
  CREATEPRODUCT,
  DELETEPRODUCT,
  GETPRODUCTS,
  GETPRODWITHID,
  SETPRODUCTS,
  UPDATEPRODUCT,
} from "../actionTypes/product";
import { productApi } from "../services/product";

/* Worker */

function* createProd(action) {
  try {
    yield put(setLoading(true));
    const {
      name,
      manufacturer,
      calories,
      rating,
      description,
      category,
      amount,
    } = action.payload;
    const data = yield call(productApi.createProduct, {
      name,
      manufacturer,
      calories,
      rating,
      description,
      category,
      amount,
    });
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}

function* deleteProd(action) {
  try {
    yield put(setLoading(true));
    const { id } = action.payload;
    const data = yield call(productApi.deleteProducts, { id });
  } catch (error) {
    console.log(error);
    yield put(setError(error))
  } finally {
    yield put(setLoading(false));
  }
}

function* getProds(action) {
  try {
    yield put(setLoading(true));
    const data = yield call(productApi.getProducts);
    const arrProd = data.data.map(
      ({
        name,
        manufacturer,
        calories,
        rating,
        description,
        category,
        amount,
      }) => {
        return {
          name,
          manufacturer,
          calories,
          rating,
          description,
          category,
          amount,
        };
      }
    );
    if (data.status === 200) {
      yield put({ type: SETPRODUCTS, data: arrProd });
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error))
  } finally {
    yield put(setLoading(false));
  }
}

function* getProd(action) {
  try {
    yield put(setLoading(true));
    const { id } = action.payload;
    const data = yield call(productApi.getProductWithId, { id });
  } catch (error) {
    console.log(error);
    yield put(setError(error))
  } finally {
    yield put(setLoading(false));
  }
}

function* updateProd(action) {
  try {
    yield put(setLoading(true));
    const data = yield call(productApi.updateProduct, {...action.payload});
  } catch (error) {
    console.log(error);
    yield put(setError(error))
  } finally {
    yield put(setLoading(false));
  }
}

/* Watcher */

function* watchCreateProductSaga() {
  yield takeLatest(CREATEPRODUCT, createProd);
}

function* watchDeleteProductSaga() {
  yield takeLatest(DELETEPRODUCT, deleteProd);
}

function* watchGetProductsSaga() {
  yield takeLatest(GETPRODUCTS, getProds);
}

function* watchGetProductWithIdSaga() {
  yield takeLatest(GETPRODWITHID, getProd);
}

function* watchUpdateProductSaga() {
  yield takeLatest(UPDATEPRODUCT, updateProd);
}

export default function* productSaga() {
  yield all([
    watchCreateProductSaga(),
    watchDeleteProductSaga(),
    watchGetProductsSaga(),
    watchGetProductWithIdSaga(),
    watchUpdateProductSaga(),
  ]);
}
