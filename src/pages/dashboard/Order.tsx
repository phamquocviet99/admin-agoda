import React from "react";
import HeaderPage from "./components/HeaderPage";
import { CgExport } from "react-icons/cg";
import { IoIosAdd } from "react-icons/io";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/en_US";

export default function Order() {
  return (
    <div>
      <HeaderPage title="Đơn hàng" onClick={null} />
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
          <div className="flex items-center gap-x-3">
            <label
              htmlFor="countries"
              className="block whitespace-nowrap  text-sm font-medium text-gray-900 dark:text-white"
            >
              Tình trạng :
            </label>
            <form className="max-w-sm mx-auto min-w-[200px]">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Tất cả</option>
                <option value="US">Đơn mới</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
          <div className="flex items-center gap-x-3">
            <label
              htmlFor="countries"
              className="block whitespace-nowrap  text-sm font-medium text-gray-900 dark:text-white"
            >
              Từ ngày :
            </label>
            <form className="max-w-sm mx-auto min-w-[200px]">
              <DatePicker className=" h-11 w-full" locale={locale} />
            </form>
            <label
              htmlFor="countries"
              className="block whitespace-nowrap  text-sm font-medium text-gray-900 dark:text-white"
            >
              Đến ngày :
            </label>
            <form className="max-w-sm mx-auto min-w-[200px]">
              <DatePicker className=" h-11 w-full" locale={locale} />
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg">
        <div className="w-full bg-blue-600 p-2 rounded-t-lg mt-5 flex justify-between items-center">
          <p className="font-medium text-white">Đơn #1288377374666666</p>
          <div className=" rounded-full py-1 px-2 bg-white text-blue-600 font-medium text-sm">
            Đơn mới
          </div>
        </div>
        <div className="p-3 flex justify-between h-fit items-center">
          <div className="flex gap-3 items-center h-full">
            <img
              className="rounded-lg h-24 w-24 object-cover"
              alt=""
              src="https://cbu01.alicdn.com/img/ibank/10876010648_1845293996.jpg"
            />
            <div>
              <p
                title=" Váy liền 4cm Thắt lưng co giãn co giãn thắt lưng rộng thắt lưng
                trang trí nữ khóa tròn màu vàng đơn giản một chiếc tóc"
                className="font-medium text-gray-500 text-sm h-[40px] overflow-hidden line-clamp-2 w-52 hover:text-orange-600 cursor-pointer"
              >
                Váy liền 4cm Thắt lưng co giãn co giãn thắt lưng rộng thắt lưng
                trang trí nữ khóa tròn màu vàng đơn giản một chiếc tóc
              </p>
              <p className="text-sm text-gray-500 mt-1">30.000đ x 1 </p>
              <p className="text-sm text-gray-500 mt-1">Đen, XL, Có bao đựng</p>
            </div>
          </div>
          <div className="h-full flex items-end ">
            <div className="block items-end justify-center">
              <p>Doanh thu : 6000đ</p>
              <button className="py-1 px-2 rounded-md bg-blue-600 hover:bg-blue-700 font-medium text-white text-sm">
                Chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
