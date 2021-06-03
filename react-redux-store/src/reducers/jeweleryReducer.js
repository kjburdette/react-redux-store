import { SET_JEWELERY } from '../action-types/jewelery-actions-type';

const initialstate = []

function jeweleryReducer(state = initialstate, action) {
    switch (action.type){
        case SET_JEWELERY:
            return state = action.payload;
        default:
            return state;
    }
}

export default jeweleryReducer;