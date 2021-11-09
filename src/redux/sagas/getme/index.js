import {takeEvery,call} from 'redux-saga/effects'
import {userApi} from './../../../API'


async function getUser(){
  const data = await userApi.getMe()
}

function* workerSaga(){
  yield call(getUser())
}

export default function* getUserSaga(){
  yield takeEvery('GETUSER',workerSaga)
}