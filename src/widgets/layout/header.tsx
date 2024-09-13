import React, { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Dropdown, MenuProps } from "antd";
import avt from "../../../src/assets/image/avt.jpg";
import { IoIosLogOut, IoIosMenu } from "react-icons/io";
import { useAppDispatch } from "../../redux/store";
import { setShowSideBar } from "../../redux/features/showSideBarSlice";
import { logout } from "../../redux/features/user-auth/user-auth-thunk";

export default function Header() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const handleLogOut = useCallback(() => dispatch(logout()), [dispatch]);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button
          onClick={() => navigate("/dashboard/account")}
          className="text-gray-500 font-medium text-center"
        >
          Thông tin
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button
          className="text-gray-500 font-medium text-center"
          onClick={() => navigate("/dashboard/setting")}
        >
          Cài đặt
        </button>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex justify-center items-center gap-x-1 py-2">
          <IoIosLogOut className="text-xl" />
          <button
            onClick={() => navigate("/auth/sign-in")}
            className="text-gray-500 font-medium text-center"
          >
            Đăng xuất
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="p-4 sticky top-0 z-40">
      <div className="py-3 shadow-md shadow-blue-gray-500/5 rounded-xl transition-all bg-white opacity-85">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center px-4">
          <div className="flex gap-x-3">
            <button
              onClick={() => dispatch(setShowSideBar())}
              className="rounded-full hover:bg-gray-200 p-4 duration-100"
            >
              <IoIosMenu />
            </button>
            <Link to="/" className="text-2xl font-medium text-blue-700 mt-1">
              Quản lý Agoda
            </Link>
          </div>{" "}
          <div className="flex items-center gap-x-4 justify-between">
            <form className="xl:min-w-[350px]">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                {/* <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
              </div>
            </form>
            <div className="flex gap-x-2 justify-end items-center">
              {" "}
              <div>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                  <Avatar
                    size={50}
                    src={
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                  />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
