import { useNavigate } from 'react-router'
import {takeEvery,call,put} from 'redux-saga/effects'
import {userApi} from './../../../API'


async function loginUser(email,password){
  return await userApi.login(email,password)
}

function* workerSaga({email,password}){
  const data = yield loginUser(email,password)
  if(data.status === 200){
    yield put({type:'SET_DATA_USER',data:{token:data.data.user.accessToken,firstName:data.data.user.firstName,lastName:data.data.user.lastName,email:data.data.user.email}})
  }
}

export default function* loginSaga(){
  yield takeEvery('LOGIN',workerSaga)
}