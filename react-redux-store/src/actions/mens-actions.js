import { SET_MENS } from '../action-types/mens-actions-type';

export const setMensClothing = (dispatch, apiData) => {
    return dispatch({ type: SET_MENS, payload:apiData })
}