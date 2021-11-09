import {takeEvery,put} from 'redux-saga/effects'
import { userApi } from '../../../API'

async function update(firstName,lastName,email,token){
  return await userApi.userUpdate(firstName,lastName,email,token)
}


function* workerSaga({firstName,lastName,email,token}){
  const data = yield update(firstName,lastName,email,token)
  if(data.status === 200){
    yield put({type:'SET_DATA_USER',data:{firstName:data.data.updatedUser.firstName,lastName:data.data.updatedUser.lastName,email:data.data.updatedUser.email}})
  }
}

export default function* updateUserSaga(){
  yield takeEvery('USERUPDATE',workerSaga)
}





