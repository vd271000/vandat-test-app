import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: undefined,
  passIntro: false,
  isGrantedNotify: false,
  isHomeReady: false,
  isTabBarFocused: false,
  currentUser: null,
  store: null,
};

const AppSlice = createSlice({
  name: "slice/app",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    setStoreSelect: (state, { payload }) => {
      state.store = payload;
    },
  },
});

export const appReducers = combineReducers({
  app: AppSlice.reducer,
});

export type RootReducer = ReturnType<typeof appReducers>;

export const AppActions = { ...AppSlice.actions };
