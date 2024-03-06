import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import tweetReducer from "./features/tweetSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    tweetSlice: tweetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
