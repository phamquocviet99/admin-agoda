import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { UserAuthSelectors } from "../../redux/features/user-auth/user-auth-selector";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ResetPasswordUserModel } from "../../model/reset-password-user.model";
import { confirmResetPassword } from "../../redux/features/user-auth/user-auth-thunk";
import { globalNavigate } from "../../utilities/navigation.utilities";
interface ConfirmResetPasswordProps {}

const ConfirmResetPassword: FC<ConfirmResetPasswordProps> = ({}) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const userId = queryParameters.get("userId") as string;
  const code = queryParameters.get("code") as string;
  const dispatch = useAppDispatch();
  const [isAgree, setIsAgree] = useState(false);
  const { loading } = useAppSelector(UserAuthSelectors.requestUserSelector);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userId: userId,
      code: code,
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu !")
        .min(8, "Mật khẩu hơn 8 ký tự !"),
    }),
    onSubmit: async (values: ResetPasswordUserModel) => {
      await dispatch(confirmResetPassword(values));
    },
  });
  useEffect(() => {
    if (!userId && !code) {
      globalNavigate("/error/not-found");
    }
  }, []);
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8 border-2 border-indigo-300">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Lấy lại mật khẩu
          </h2>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-5 space-y-4 lg:mt-5 md:space-y-5"
            action="#"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Mật khẩu mới
              </label>
              <input
                value={formik?.values?.password}
                onChange={formik.handleChange}
                type="password"
                name="password"
                placeholder="••••••••"
                className={`bg-gray-50 border ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-300"
                    : "border-gray-300"
                }  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
              />
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-500 mt-2 text-sm">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className="flex items-start w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      checked={isAgree}
                      onChange={() => setIsAgree(!isAgree)}
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Tôi đồng ý với điều khoản
                    </label>
                  </div>
                </div>
                <a
                  href="/"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  Điều khoản
                </a>
              </div>
            </div>
            <button
              disabled={!isAgree || loading}
              type="submit"
              className={`${
                isAgree === true
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-400"
              } text-white w-full  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center justify-center`}
            >
              {loading && (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline mr-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
              Cập nhật
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConfirmResetPassword;