import { takeEvery,put } from "@redux-saga/core/effects"
import { userApi } from '../../../API'


async function deleteUser(token){
  return await userApi.userDelete(token)
}

function* workerSaga({token}){
  const data = yield deleteUser(token)
  if(data.status === 200){
    yield put({type:'SET_DATA_USER',data:{token:'',firstName:'',lastName:'',email:''}})
  }
}

export default function* deleteUserSaga(){
  yield takeEvery("DELETEUSER",workerSaga)
}