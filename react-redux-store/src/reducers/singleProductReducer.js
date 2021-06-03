import { SET_ITEM } from '../action-types/single-actions-type';

const initialState = {}

function singleProduct(state=initialState, action) {
    switch (action.type){
        case SET_ITEM:
            return state = action.payload;
        default:
            return state;
    } 
}

export default singleProduct;