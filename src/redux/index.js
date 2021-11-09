import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import rootSaga from "./sagas";
import authReducer from './auth'



const reducers = combineReducers({
  authReducer
})

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(reducers,applyMiddleware(sagaMiddleWare))

window.store = store

sagaMiddleWare.run(rootSaga)

export default store