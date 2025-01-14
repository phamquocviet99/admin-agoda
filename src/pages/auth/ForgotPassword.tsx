import React, { FC } from "react";
import { globalNavigate } from "../../utilities/navigation.utilities";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { UserAuthSelectors } from "../../redux/features/user-auth/user-auth-selector";
import { resetPassword } from "../../redux/features/user-auth/user-auth-thunk";
interface ForgotPasswordProps {}

export const ForgotPassword: FC<ForgotPasswordProps> = ({}) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(UserAuthSelectors.requestUserSelector);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Vui lòng nhập email !")
        .email("Địa chỉ email không hợp lệ !"),
    }),
    onSubmit: async (values) => {
      await dispatch(resetPassword(values?.email));
    },
  });
  return (
    <div className="w-full flex items-center justify-cente h-full min-h-screen">
      <div className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Bạn đã quên mật khẩu ?
              </h1>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Nhớ mật khẩu ?
                <button
                  onClick={() => globalNavigate("/auth/sign-in")}
                  type="button"
                  className="font-medium text-blue-400 hover:text-blue-500 hover:underline "
                >
                  Đăng nhập
                </button>
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                      </label>
                      <input
                        value={formik?.values?.email}
                        onChange={formik.handleChange}
                        type="text"
                        name="email"
                        className={`bg-gray-50 border ${
                          formik.errors.email && formik.touched.email
                            ? "border-red-300"
                            : "border-gray-300"
                        }  text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 `}
                        placeholder="name@company.com"
                      />{" "}
                      {formik.errors.email && formik.touched.email && (
                        <p className="text-red-500 mt-2 text-sm">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>
                    <p className=" text-gray-500 mt-2 py-3 text-sm">
                      Sau khi xác nhận, bạn hãy vào email để lấy mã code để đặt
                      lại mật khẩu.
                    </p>
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className={`${
                      loading === false
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
                    Gửi mã xác nhận
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
          <a
            className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
            href="/"
            target="_blank"
          >
            Quy định
          </a>
          <a
            className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
            href="/"
          >
            Liên hệ để được hỗ trợ
          </a>
        </p>
      </div>
    </div>
  );
};
