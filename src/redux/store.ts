import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ShowSideBarSlice } from "./features/showSideBarSlice";

import { userAuthSlice } from "./features/user-auth/user-auth-slice";

export const store = configureStore({
  reducer: {
    showSideBar: ShowSideBarSlice.reducer,

    userAuth: userAuthSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
