import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import rootSaga from "./sagas";
import { rootReducers } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(rootSaga)

export default store