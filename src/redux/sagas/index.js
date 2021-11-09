import { spawn,call,all } from "@redux-saga/core/effects"
import signUpSaga from "./signup"
import loginSaga from './login'
import renewToken from './renewToken'
import logoutSaga from "./logout"
import getUserSaga from "./getme"
import updateUserSaga from "./userUpdate"
import deleteUserSaga from "./deleteUser"


export default function* rootSaga (){

  const sagas = [signUpSaga,loginSaga,renewToken,logoutSaga,getUserSaga,updateUserSaga,deleteUserSaga]
  

  const retrySagas = yield sagas.map(saga=>{
    return spawn(function* (){
      while(true){
        try{
          yield call(saga)
        }
        catch(e){
          console.log(e)
        }
      }
    })
  })

  yield all(retrySagas)
}