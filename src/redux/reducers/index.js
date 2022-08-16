import { combineReducers } from "redux";
import getPersonalDataReducer from "./get-personal-data";
const rootReducer = combineReducers({
    getPersonalDataReducer,
});

export default rootReducer;