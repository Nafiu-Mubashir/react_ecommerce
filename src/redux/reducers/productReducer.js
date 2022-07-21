import { ActionTypes } from "../contents/actions-types"

const initialState = {
    products: [],
}
export const productReducer = (state = initialState, {type, payload}) => {
    // console.log(payload);
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            // console.log(payload)
            return  {...state, products: payload};
        default:
            return state;
    }
};

export const selectedProductsReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
} 