import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_AUTH_SLICE, UserAuth, UserAuthSlice } from "./user-auth-constant";
import {
  confirmResetPassword,
  login,
  logout,
  refreshToken,
  register,
  resetPassword,
} from "./user-auth-thunk";

const initialState: UserAuthSlice<UserAuth> = {
  user: null,
  loading: false,
  success: false,
  error: null,
};

export const userAuthSlice = createSlice({
  name: USER_AUTH_SLICE,
  initialState,
  reducers: {
    updateUserAuth: (state, action: PayloadAction<UserAuth>) => {
      const data = action.payload;
      state.user = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<UserAuth>) => {
        const data = action.payload;
        state.user = data;
        state.loading = false;
      }
    );
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = "false";
    });

    builder.addCase(
      refreshToken.fulfilled,
      (state, action: PayloadAction<UserAuth>) => {
        const data = action.payload;
        state.user = data;
      }
    );
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.error = null;
      state.user = null;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.error = null;
      state.user = null;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(logout.rejected, (state) => {
      state.error = null;
      state.user = null;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.error = null;
      state.user = null;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.rejected, (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.loading = false;
      state.error = "false";
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.error = null;
      state.user = null;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resetPassword.rejected, (state) => {
      state.error = null;
      state.user = null;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(confirmResetPassword.fulfilled, (state) => {
      state.error = null;
      state.user = null;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(confirmResetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(confirmResetPassword.rejected, (state) => {
      state.error = null;
      state.user = null;
      state.loading = false;
      state.success = true;
    });
  },
});
export default userAuthSlice.reducer;
export const { updateUserAuth } = userAuthSlice.actions;
