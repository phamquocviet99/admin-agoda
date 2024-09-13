export const USER_AUTH = "userAuth";
export const USER_AUTH_SLICE = "userAuth";
export interface UserAuth {
  id: string | null;
  fullName: string | null;
  role: string | null;
  jwtToken: string | null;
}
export interface UserAuthSlice<UserAuth> {
  user: UserAuth | null;
  loading: boolean;
  success: boolean;
  error: string | null;
}
