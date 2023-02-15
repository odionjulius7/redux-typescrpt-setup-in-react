import { configureStore } from "@reduxjs/toolkit";
import myFeatureSlice from "../myFeatureReducer/reducerSlice";

const store = configureStore({
  reducer: {
    count: myFeatureSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";

// import rootReducer from "./rootReducer";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [...getDefaultMiddleware(), thunk],
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof rootReducer>;

// export default store;
