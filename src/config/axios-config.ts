import axios from "axios";
import { store } from "../redux/store";
import { jwtDecode } from "jwt-decode";
import { refreshToken } from "../redux/features/user-auth/user-auth-thunk";
import { globalNavigate } from "../utilities/navigation.utilities";

export const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_URL,
  headers: {
    "content-type": "application/json",
  },
  withCredentials: true,
});
axiosPublic.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosPublic.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    if (error.response.data.status === 500) {
      return globalNavigate("/error/server-error");
    }

    return Promise.reject(error);
  }
);

export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_PRIVATE_URL,
});
let requestRefreshToken: any = null;

axiosPrivate.interceptors.request.use(
  async (config) => {
    const user = store?.getState()?.userAuth?.user;
    let currentDate = new Date();
    if (user?.jwtToken) {
      const decodedToken: { exp: number } = jwtDecode(user?.jwtToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        requestRefreshToken = requestRefreshToken
          ? requestRefreshToken
          : store.dispatch(refreshToken());
        await requestRefreshToken();
        requestRefreshToken = null;
        if (config?.headers) {
          config.headers["authorization"] = `Bearer ${
            store?.getState()?.userAuth?.user?.jwtToken
          }`;
        }
      }
    }
    return config;
  },
  (error) => {
    if (error.response.data.status === 500) {
      return globalNavigate("/error/server-error");
    }
    return Promise.reject(error);
  }
);
