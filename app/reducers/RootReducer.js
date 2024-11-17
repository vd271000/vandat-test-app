import { combineReducers } from "@reduxjs/toolkit";
import { PostSlice } from "../screens/Home/slice";

// Combine Root Reducer
const reducer = combineReducers({
  post: PostSlice.reducer,
});

export default reducer;
