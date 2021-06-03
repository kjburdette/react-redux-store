import { SET_PRODUCTS } from '../action-types/products-actions-type';

const intialstate = []

function productsReducer(state=intialstate, action) {
    switch (action.type){
        case SET_PRODUCTS:
            return state = action.payload;
        default:
            return state;
    }
}

export default productsReducer;