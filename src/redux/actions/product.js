import { ActionTypes } from "../contents/actions-types";
export const setProducts = (products) => {
    // console.log(products)
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (products) => {
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    };
};

export const removeSelectedProducts = () => {
    return{ 
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
};