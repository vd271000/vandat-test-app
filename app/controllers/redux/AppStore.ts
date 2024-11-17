import { Action, Dispatch, UnknownAction } from "redux";
import rootReducer from "../../reducers/RootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import devtoolsEnhancer from "redux-devtools-expo-dev-plugin";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { thunk, ThunkDispatch } from "redux-thunk";

const blacklistReduxActionLog: string | any[] = [];

function logger({ getState, dispatch }: any) {
  return (next: any) => (action: any) => {
    if (blacklistReduxActionLog.indexOf(action.type) === -1) {
      console.log("[Redux]", action.type);
    }
    const returnValue = next(action);
    return returnValue;
  };
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // transforms: [],
  whitelist: ["post"],
};

const getMiddlewares = (
  getDefaultMiddleware: (arg0: {
    serializableCheck: {
      ignoredActions: (
        | "persist/FLUSH"
        | "persist/REHYDRATE"
        | "persist/PAUSE"
        | "persist/PERSIST"
        | "persist/PURGE"
        | "persist/REGISTER"
      )[];
    };
  }) => any[]
) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger, thunk);
/**
 * @param {Store} store
 */

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: false,
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(devtoolsEnhancer()),
  middleware: getMiddlewares,
});

export const persistor = persistStore(store, {}, () => {});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Dispatch<Action | UnknownAction> &
  ThunkDispatch<RootState, null, Action | UnknownAction>;
