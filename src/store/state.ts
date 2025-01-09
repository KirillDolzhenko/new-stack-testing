import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const reducer = combineReducers({
  [counterSlice.reducerPath]: counterSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export const createStore = (initialState?: RootState | undefined) => {
  return configureStore({
    reducer,
    preloadedState: initialState,
  });
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
