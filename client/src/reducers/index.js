import { combineReducers } from "redux";

// starting to import the reducers that we will place in the combineReducers object.

import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
export default combineReducers({ alert, auth, profile });
