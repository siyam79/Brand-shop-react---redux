import { combineReducers } from "redux";
import productReducer from "../Products/productReducer";

const rootReducer = combineReducers({
    product: productReducer
})

export default rootReducer