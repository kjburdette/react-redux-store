import { ADD_TO_CART } from "../action-types/cart-actions-type"

export const addProductToCart = (dispatch, product) => {
    return dispatch({ type: ADD_TO_CART, payload: product})
}