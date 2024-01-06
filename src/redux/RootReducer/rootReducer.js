import { combineReducers } from "redux";
import productReducer from "../Products/productReducer";
import cartReducer from "../carts/cartReducer";

const rootReducer = combineReducers({
    product: productReducer,

    carts : cartReducer


})



export default rootReducer