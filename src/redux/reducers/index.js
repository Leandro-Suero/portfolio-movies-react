import { combineReducers } from "redux";
import showsReducer from "./showsReducer";

const rootReducer = combineReducers({ shows: showsReducer });

export default rootReducer;
