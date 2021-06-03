import { ADD_TO_CART } from "../action-types/cart-actions-type";

const initialState = [];

export const cart = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return state = [...state, action.payload]
        default:
            return state;
    }
}

export default cart;