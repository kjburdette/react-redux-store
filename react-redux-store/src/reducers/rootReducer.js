import { combineReducers } from "redux";
import mensReducer from "./mensReducer";
import jeweleryReducer from "./jeweleryReducer";
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
    mensReducer,
    jeweleryReducer
});

export default rootReducer;
