import { combineReducers } from "redux";
import productsReducer from './productsReducer';
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
    productsReducer,
});

export default rootReducer;
