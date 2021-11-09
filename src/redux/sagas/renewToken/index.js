import {takeEvery,call} from 'redux-saga/effects'
import {userApi} from './../../../API'


async function renewToken(token){
  const data = await userApi.renewToken(token)
}

function* workerSaga({token}){
 yield call(renewToken(token))
}

export default function* renewTokenSaga(){
  yield takeEvery('RENEWTOKEN',workerSaga)
}