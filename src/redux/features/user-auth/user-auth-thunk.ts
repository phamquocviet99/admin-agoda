import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosPublic } from "../../../config/axios-config";
import { USER_AUTH_SLICE, UserAuth } from "./user-auth-constant";
import { LoginUserModel } from "../../../model/login-user.model";
import { RegisterUserModel } from "../../../model/register-user.model";
import { globalNavigate } from "../../../utilities/navigation.utilities";
import { ErrorPopup } from "../../../utilities/function/swal.ultilities";
import { ResetPasswordUserModel } from "../../../model/reset-password-user.model";

export const login = createAsyncThunk(
  `${USER_AUTH_SLICE}/login`,
  async (user: LoginUserModel, thunkAPI: any) => {
    try {
      const res = await axiosPublic.post("/api/v1/auth/login", {
        loginId: user.loginId,
        password: user.password,
      });
      globalNavigate("/");
      return res.data as UserAuth;
    } catch (error: any) {
      const dataError = error.response?.data;
      ErrorPopup(
        "Đăng nhập thất bại",
        dataError?.status === 400
          ? "Mời bạn nhập đúng định dạng email hoặc số điện thoại"
          : dataError?.detail
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetPassword = createAsyncThunk(
  `${USER_AUTH_SLICE}/reset-password`,
  async (email: string, thunkAPI: any) => {
    try {
      const res = await axiosPublic.post(
        `/api/v1/accounts/reset-password/${email}`
      );
      globalNavigate("/auth/confirm-reset-password");
      return res;
    } catch (error: any) {
      const dataError = error.response?.data;
      ErrorPopup(
        "Gữi mã xác nhận thất bại",
        dataError?.status === 400
          ? "Mời bạn nhập đúng định dạng email"
          : dataError?.detail
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const confirmResetPassword = createAsyncThunk(
  `${USER_AUTH_SLICE}/confirm-reset-password`,
  async (resetUser: ResetPasswordUserModel, thunkAPI: any) => {
    try {
      const res = await axiosPublic.post(
        "/api/v1/accounts/confirm-reset-password",
        resetUser
      );
      globalNavigate("/auth/sign-in");
      return res;
    } catch (error: any) {
      console.log(error);
      const dataError = error.response?.data;
      if (dataError?.status === 400) globalNavigate("/error/not-found");
      ErrorPopup(
        "Gữi mã xác nhận thất bại",

        dataError?.detail
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const register = createAsyncThunk(
  `${USER_AUTH_SLICE}/register`,
  async (user: RegisterUserModel, thunkAPI: any) => {
    try {
      const res = await axiosPublic.post("/api/v1/accounts/signup", {
        email: user.email,
        password: user.password,
        phone: user.phone,
        fullName: user.fullName,
      });
      globalNavigate("/auth/sign-in");
      return res.data;
    } catch (error: any) {
      const dataError = error.response?.data;
      ErrorPopup("Đăng ký thất bại", dataError?.detail);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk(
  `${USER_AUTH_SLICE}/refresh`,
  async (_, thunkAPI: any) => {
    try {
      const res = await axiosPublic.post("/api/v1/auth/refresh-token");
      return res.data as UserAuth;
    } catch (error: any) {
      globalNavigate("/auth/sign-in");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  `${USER_AUTH_SLICE}/logout`,
  async (_, thunkAPI: any) => {
    try {
      const res = await axiosPublic.post("/api/v1/auth/logout");
      globalNavigate("/auth/sign-in");
      return res;
    } catch (error: any) {
      const dataError = error.response?.data;
      ErrorPopup("Đăng xuất thất bại", dataError?.detail);
      globalNavigate("/auth/sign-in");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
