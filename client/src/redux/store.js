import reducer from "./reducer/reducerAuth";
 import {createStore,compose,applyMiddleware, combineReducers} from 'redux'
 import thunk from 'redux-thunk'
import { productReducer } from "./reducer/productReducer";


 const devtool=  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

 const routReducer = combineReducers({
     auth: reducer,
     products: productReducer
 })


const store = createStore(routReducer, compose(applyMiddleware(thunk), devtool))


export default store