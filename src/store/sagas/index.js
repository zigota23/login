import { spawn,call,all,fork } from "@redux-saga/core/effects"
import productSaga from "./product"
import userSaga from "./user"



export default function* rootSaga (){
  yield all([
    fork(userSaga),
    fork(productSaga),
  ])
}