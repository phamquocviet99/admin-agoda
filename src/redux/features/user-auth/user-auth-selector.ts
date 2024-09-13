import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { USER_AUTH_SLICE, UserAuth, UserAuthSlice } from "./user-auth-constant";

const userAuthSlice = (state: RootState): UserAuthSlice<UserAuth> =>
  state[USER_AUTH_SLICE];
const jwtTokenSelector = createSelector(userAuthSlice, (state) => {
  return state.user?.jwtToken;
});
const requestUserSelector = createSelector(userAuthSlice, (state) => {
  return state;
});
export const UserAuthSelectors = {
  jwtTokenSelector,
  requestUserSelector,
};
