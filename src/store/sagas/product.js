import { takeLatest,put,call,all} from "@redux-saga/core/effects";
import { CREATEPRODUCT, DELETEPRODUCT, GETPRODUCTS, GETPRODWITHID, SETPRODUCTS, UPDATEPRODUCT } from "../actionTypes/product";
import { productApi } from "../services/product";


/* Worker */

function* createProd(action){
  try{
    const {name,manufacturer,calories,rating,description,category,amount} = action.payload
    const data = yield call(productApi.createProduct,{name,manufacturer,calories,rating,description,category,amount})
  }
  catch(error){
    console.log(error)
  }

}


function* deleteProd(action){
  try{
    const {id} = action.payload
    const data = yield call(productApi.deleteProducts,{id})
  }
  catch(error){
    console.log(error)
  }

}


function* getProds(action){
  try{
      const data = yield call(productApi.getProducts)
      const arrProd = data.data.map(({name,manufacturer,calories,rating,description,category,amount})=>{
        return{name,manufacturer,calories,rating,description,category,amount}
      })
      if(data.status === 200){
        yield put({type:SETPRODUCTS,data:arrProd})
      }
  }
  catch(error){
    console.log(error)
  }
  
}

function* getProd(action){
  try{
    const {id} =action.payload
    const data = yield call(productApi.getProductWithId,{id})
  }
  catch(error){
    console.log(error)
  }

}

function* updateProd(action){
  try{
    const {name,manufacturer,calories,rating,description,category,amount,id} = action.payload
    const data = yield call(productApi.updateProduct,{name,manufacturer,calories,rating,description,category,amount,id})
  }
  catch(error){
    console.log(error)
  }

}

/* Watcher */


function* watchCreateProductSaga(){
  yield  takeLatest(CREATEPRODUCT,createProd)
}

function* watchDeleteProductSaga(){
  yield takeLatest(DELETEPRODUCT,deleteProd)
}

function* watchGetProductsSaga(){
  yield takeLatest(GETPRODUCTS,getProds)
}

function* watchGetProductWithIdSaga(){
  yield takeLatest(GETPRODWITHID,getProd)
}

function* watchUpdateProductSaga(){
  yield takeLatest(UPDATEPRODUCT,updateProd)
}

export default function* productSaga(){
  yield all([
    watchCreateProductSaga(),
    watchDeleteProductSaga(),
    watchGetProductsSaga(),
    watchGetProductWithIdSaga(),
    watchUpdateProductSaga()
  ])
}
