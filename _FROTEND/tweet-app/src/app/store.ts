import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
