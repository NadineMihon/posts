import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "./slice/postsSlice";
import authReducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});