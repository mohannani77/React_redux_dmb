import {combineReducers} from 'redux'
import { productReducer, selectproductReducer } from './ProductReducer'

const reducers=combineReducers({
    allproducts:productReducer,
    product:selectproductReducer
})

export default reducers;