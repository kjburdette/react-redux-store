import { SET_ITEM } from '../action-types/single-actions-type';

export const setItem = (dispatch, product) => {
    return dispatch({ type: SET_ITEM, payload:product})
}