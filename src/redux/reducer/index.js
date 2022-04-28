import { combineReducers } from "redux";
import types from "../types";

import * as auth from './auth'


const appReducer = combineReducers({
    auth,
})
export default appReducer;