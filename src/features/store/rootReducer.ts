import { combineReducers } from "@reduxjs/toolkit";
import myFeatureReducer from "../myFeatureReducer/reducerSlice";

const rootReducer = combineReducers({
  myFeature: myFeatureReducer,
});

export default rootReducer;

// export const rootReducer = {};
