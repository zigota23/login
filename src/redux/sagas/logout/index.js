import {takeEvery,put} from 'redux-saga/effects'
import {userApi} from './../../../API'


async function logoutUser(token){
  return await userApi.logout(token)
}

function* workerSaga({token}){
  const data = yield logoutUser(token) 
  if(data.status === 200){
    yield put({type:'SET_DATA_USER',data:{token:'',firstName:'',lastName:''}})
  }
}

export default function* logoutSaga(){
  yield takeEvery('LOGOUT',workerSaga)
}