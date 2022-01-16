import { combineReducers } from "redux";
import { dataReducer } from "./datafetch";

export const reducers = combineReducers({
    allData: dataReducer,
});