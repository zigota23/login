import {combineReducers} from "redux";
import authReducer from './auth'
import productReducer from "./product";
import statusReducer from './status'



export const rootReducers = combineReducers({
  authReducer,
  productReducer,
  statusReducer
})