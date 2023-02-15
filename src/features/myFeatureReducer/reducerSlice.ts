import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/index";

interface MyState {
  count: number;
}

const initialState: MyState = {
  count: 6,
};

const myFeatureSlice = createSlice({
  name: "myFeature",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;

      console.log(state.count);
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, reset, setCount } = myFeatureSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.count;

export default myFeatureSlice.reducer;
