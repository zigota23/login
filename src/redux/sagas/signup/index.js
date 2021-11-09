import {takeEvery,put} from 'redux-saga/effects'
import { userApi } from '../../../API'

async function signUpUser(firstName,lastName,email,password){
  return await userApi.signup(firstName,lastName,email,password)
}

function* sagaWorker({firstName,lastName,email,password}){
  const data = yield signUpUser(firstName,lastName,email,password)
  if(data.status === 201){
    yield put({type:'SET_DATA_USER',data:{token:data.data.user.accessToken,firstName:data.data.user.firstName,lastName:data.data.user.lastName,email:data.data.user.email}})
  }
} 

export default function* signUpSaga(){
  yield takeEvery('SIGNUP',sagaWorker)
}