import React, { FC, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { CgExport } from "react-icons/cg";
import { RxReload } from "react-icons/rx";
import avt from "../../assets/image/avt.jpg";
import { Pagination, PaginationProps } from "antd";
import HeaderPage from "./components/HeaderPage";
const UserAccount: FC = function () {
  const listUser = [
    { name: "123" },
    { name: "123" },
    { name: "123" },
    { name: "123" },
    { name: "123" },
    { name: "123" },
    { name: "123" },
    { name: "123" },
    { name: "123" },
  ];
  const [current, setCurrent] = useState(3);

  const onChange: PaginationProps["onChange"] = (page: number) => {
    console.log(page);
    setCurrent(page);
  };
  function test() {
    alert("loading");
  }
  return (
    <div className="">
      <HeaderPage title="Người dùng" onClick={test} />
      <div className="block md:flex items-center justify-between mt-7">
        <div className="flex gap-5 items-center w-full">
          <form className="md:max-w-[350px] w-full">
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
                className="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center gap-x-3 w-full md:w-fit justify-end mt-4 md:mt-0">
          <button className="flex items-center gap-x-2 whitespace-normal rounded-md shadow-md px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium">
            <IoIosAdd className="text-xl text-white" />
            <span className="">Thêm </span>
          </button>
          <button className="flex items-center gap-x-2 rounded-md shadow-md px-3 py-2 bg-transparent hover:bg-gray-200 text-black font-medium border border-gray-500">
            <CgExport className="text-xl" />
            <span>Xuất</span>
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center pl-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className=" pl-20 py-3">
                Thông tin
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                username
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Quyền hạn
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Trạng thái
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {listUser?.map((value, key) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4 px-6 py-4 ">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    alt="s"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">Khoa {key}</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@agoda.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4 text-center">vietpham</td>

                <td className="px-6 py-4 text-center">Admin</td>
                <td className="px-6 py-4 text-center">Hoạt động</td>

                <td className=" px-6 py-4  h-full">
                  <div className="flex items-center justify-center  gap-x-2">
                    {" "}
                    <button className="px-2 py-1 whitespace-nowrap rounded-md shadow-md text-white font-medium bg-blue-600 hover:bg-blue-700">
                      Cập nhật
                    </button>
                    <button className="px-2 py-1 rounded-md shadow-md text-white font-medium bg-red-500 hover:bg-red-600">
                      Xoá
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-10">
        <Pagination current={current} onChange={onChange} total={50} />;
      </div>
    </div>
  );
};
export default UserAccount;
