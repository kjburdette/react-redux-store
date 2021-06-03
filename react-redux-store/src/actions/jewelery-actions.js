import { SET_JEWELERY } from '../action-types/jewelery-actions-type';

export const setJewelery = (dispatch, apiData) => {
    return dispatch({ type: SET_JEWELERY, payload:apiData })
}