import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";

const reducers = combineReducers({
    products: productReducer,
    product: selectedProductsReducer,
});
export default reducers;