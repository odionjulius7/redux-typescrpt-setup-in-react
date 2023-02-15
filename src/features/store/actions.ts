import { AppDispatch } from "./index";
import {
  increment,
  decrement,
  reset,
  setCount,
} from "../myFeatureReducer/reducerSlice";

export const incrementCount = () => (dispatch: AppDispatch) => {
  dispatch(increment());
};

export const decrementCount = () => (dispatch: AppDispatch) => {
  dispatch(decrement());
};

export const resetCount = () => (dispatch: AppDispatch) => {
  dispatch(reset());
};

export const setCountValue = (count: number) => (dispatch: AppDispatch) => {
  dispatch(setCount(count));
};
