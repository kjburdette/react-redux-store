import { SET_MENS } from '../action-types/mens-actions-type';

const initialstate = []

function mensReducer(state = initialstate, action) {
    switch (action.type){
        case SET_MENS:
            return "";
        default:
            return state;
    }
}

export default mensReducer;