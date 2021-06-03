import { SET_PRODUCTS } from '../action-types/products-actions-type';

export const setProducts = (dispatch, apiData) => {
    return dispatch({ type: SET_PRODUCTS, payload:apiData })
}