import { takeLatest,put,call,all} from "@redux-saga/core/effects"
import { DELETEUSER, GETUSER, LOGIN, LOGOUT, RENEWTOKEN, SETDATAUSER, SIGNUP, USERUPDATE } from "../actionTypes/user"
import { userApi } from "../services/user"


/* Worker */

function* userDelete(action){
  try{
    const data = yield call(userApi.userDelete)
    debugger
    if(data.status === 200){
      yield put({type:SETDATAUSER,data:{token:'',firstName:'',lastName:'',email:''}})
      action.payload.navigate('/login')
    }
  }
  catch(error){
    console.log(error)
  }

}

function* getUser(){
  try{
    const data = yield call(userApi.getMe())
  }
  catch(error){
    console.log(error)
  }
  
}


function* loginUser(action){
  try{
      const {email,password} = action.payload
      const data = yield call(userApi.login,{email,password})
      if(data.status === 200){
        const {accessToken:token,firstName,lastName,email}=data.data.user
        yield put({type:SETDATAUSER,data:{token,firstName,lastName,email}})
        action.payload.navigate('/')
      }
  }
  catch(error){
    console.log(error)
  }
  
}


function* logoutUser(action){
  try{
    const data = yield call(userApi.logout)
    if(data.status === 200){
      yield put({type:SETDATAUSER,data:{token:'',firstName:'',lastName:''}})
      action.payload.navigate('/login')
    }
  }
  catch(error){
    console.log(error)
  }

}

function* renewToken(action){
  try{
    const data = yield call(userApi.renewToken)
  }
  catch(error){
    console.log(error)
  }

}


function* singUpUser(action){
  try{
    const {firstName,lastName,email,password} = action.payload
    const data = yield call(userApi.signup,{firstName,lastName,email,password})
    if(data.status === 201){
      const {accessToken:token,firstName,lastName,email}=data.data.user
      yield put({type:SETDATAUSER,data:{token,firstName,lastName,email}})
      action.payload.navigate('/')
    }
  }
  catch(error){
    console.log(error)
  }

} 


function* userUpdate(action){
  try{
    const {firstName,lastName,email} =action.payload
    const data = yield call(userApi.userUpdate,{firstName,lastName,email})
    if(data.status === 200){
      const {firstName,lastName,email}=data.data.updatedUser
      yield put({type:SETDATAUSER,data:{firstName,lastName,email}})
      action.payload.navigate('/profile')
    }
  }
  catch(error){
    console.log(error)
  }

}



/* Watchers */

function* watchDeleteUserSaga(){
  yield takeLatest(DELETEUSER,userDelete)
}

function* watchGetUserSaga(){
  yield takeLatest(GETUSER,getUser)
}

function* watchUpdateUserSaga(){
  yield takeLatest(USERUPDATE,userUpdate)
}

function* watchSignUpSaga(){
  yield takeLatest(SIGNUP,singUpUser)
}
function* watchRenewTokenSaga(){
  yield takeLatest(RENEWTOKEN,renewToken)
}

function* watchLogoutSaga(){
  yield takeLatest(LOGOUT,logoutUser)
}

function* watchLoginSaga(){
  
  yield takeLatest(LOGIN,loginUser)
}

export default function* userSaga(){
  yield all([
    watchDeleteUserSaga(),
    watchGetUserSaga(),
    watchUpdateUserSaga(),
    watchSignUpSaga(),
    watchRenewTokenSaga(),
    watchLogoutSaga(),
    watchLoginSaga()
  ])
}