import {
  IoIosHome,
  IoIosSettings,
  IoMdPaper,
  IoMdPeople,
} from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import Order from "../pages/dashboard/Order";
import Customer from "../pages/dashboard/Customer";
import UserAccount from "../pages/dashboard/UserAccount";
import Account from "../pages/dashboard/Account";
import Setting from "../pages/dashboard/Setting";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/dashboard/Home";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import ConfirmResetPassword from "../pages/auth/ConfirmResetPassword";
import NotFound from "../pages/error/NotFound";
import ServerError from "../pages/error/ServerError";
import Hotel from "../pages/dashboard/Hotel";

const icon = {
  className: "w-5 h-5 text-inherit",
};
export const routes = [
  {
    title: "Bảng điều khiển",
    layout: "dashboard",
    pages: [
      {
        icon: <IoIosHome {...icon} />,
        name: "Trang chủ",
        path: "home",
        element: <Home />,
      },
      {
        icon: <IoMdPaper {...icon} />,
        name: "Khách sạn",
        path: "hotel",
        element: <Hotel />,
      },
      {
        icon: <IoMdPeople {...icon} />,
        name: "Khách hàng",
        path: "customer",
        element: <Customer />,
      },

      {
        icon: <IoMdPaper {...icon} />,
        name: "Người dùng",
        path: "list-account",
        element: <UserAccount />,
      },
      // {
      //   icon: <MdManageAccounts {...icon} />,
      //   name: "Tài khoản",
      //   path: "account",
      //   element: <Account />,
      // },
      {
        icon: <IoIosSettings {...icon} />,
        name: "Cài đặt",
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    title: "Auth Page",
    layout: "auth",
    pages: [
      {
        icon: <IoIosHome {...icon} />,
        name: "dashboard",
        path: "sign-in",
        element: <SignIn />,
      },
      {
        icon: <IoIosHome {...icon} />,
        name: "dashboard",
        path: "sign-up",
        element: <SignUp />,
      },
      {
        icon: <IoIosHome {...icon} />,
        name: "forgot-password",
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        icon: <IoIosHome {...icon} />,
        name: "dashboard",
        path: "confirm-reset-password",
        element: <ConfirmResetPassword />,
      },
    ],
  },
  {
    title: "Error Page",
    layout: "error",
    pages: [
      {
        icon: <IoIosHome {...icon} />,
        name: "Not Found",
        path: "not-found",
        element: <NotFound />,
      },
      {
        icon: <IoIosHome {...icon} />,
        name: "Server Error",
        path: "server-error",
        element: <ServerError />,
      },
      // {
      //   icon: <IoIosHome {...icon} />,
      //   name: "forgot-password",
      //   path: "forgot-password",
      //   element: <ForgotPassword />,
      // },
      // {
      //   icon: <IoIosHome {...icon} />,
      //   name: "dashboard",
      //   path: "confirm-reset-password",
      //   element: <ConfirmResetPassword />,
      // },
    ],
  },
];
