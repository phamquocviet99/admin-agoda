import React, { FC } from "react";
import HeaderPage from "./components/HeaderPage";
import { DatePicker, Table, TableColumnsType } from "antd";

interface HotelProps {}

const Hotel: FC<HotelProps> = ({}) => {
  interface IMyHotel {
    key: React.Key;
    id: string;
    name: string;
    status: string;
    revenue: number;
    MTD: number;
    score: number;
  }

  const columns: TableColumnsType<IMyHotel> = [
    {
      title: "Mã cơ sở lưu trú",
      dataIndex: "id",
      showSorterTooltip: { target: "full-header" },

      sorter: (a, b) => a.name.length - b.name.length,
      defaultSortOrder: "descend",
      onHeaderCell: () => ({ style: { fontSize: "12px" } }),
      width: "15%",
    },
    {
      showSorterTooltip: { target: "full-header" },
      title: "Tên cơ sở lưu trú",
      dataIndex: "name",
      defaultSortOrder: "descend",
      // sorter: (a, b) => a.age - b.age,
      width: "25%",
    },
    {
      showSorterTooltip: { target: "full-header" },
      title: "Trạng thái",
      dataIndex: "status",
      defaultSortOrder: "descend",
      // sorter: (a, b) => a.age - b.age,
      width: "15%",
    },
    {
      showSorterTooltip: { target: "full-header" },
      title: "Doanh thu (MTD)",
      dataIndex: "revenue",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.revenue - b.revenue,
      width: "15%",
    },
    {
      showSorterTooltip: { target: "full-header" },
      title: "Giá trung bình hằng ngày (MTD)",
      dataIndex: "MTD",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.MTD - b.MTD,
      width: "15%",
    },
    {
      showSorterTooltip: { target: "full-header" },
      title: "Điểm nội dung",
      dataIndex: "score",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.score - b.score,
      width: "15%",
    },
  ];
  const data = [
    {
      key: "1",
      id: "1",
      status: "Hoạt động",
      revenue: 12000,
      MTD: 24000,
      score: 7.5,
      name: "Viet Hotel",

      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      id: "2",
      status: "Hoạt động",
      revenue: 12000,
      MTD: 24000,
      score: 7.5,
      name: "Viet Hotel 1",

      address: "New York No. 1 Lake Park",
    },
    {
      key: "3",
      id: "3",
      status: "Hoạt động",
      revenue: 12000,
      MTD: 24000,
      score: 7.5,
      name: "Viet Hotel 3",

      address: "New York No. 1 Lake Park",
    },
    {
      key: "1",
      id: "1",
      status: "Hoạt động",
      revenue: 12000,
      MTD: 24000,
      score: 7.5,
      name: "Viet Hotel",

      address: "New York No. 1 Lake Park",
    },
  ];
  return (
    <div>
      {" "}
      <HeaderPage title="Danh sách khách sạn" onClick={null} />
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
              <DatePicker className=" h-11 w-full" />
            </form>
            <label
              htmlFor="countries"
              className="block whitespace-nowrap  text-sm font-medium text-gray-900 dark:text-white"
            >
              Đến ngày :
            </label>
            <form className="max-w-sm mx-auto min-w-[200px]">
              <DatePicker className=" h-11 w-full" />
            </form>
          </div>
        </div>
      </div>
      <Table
        bordered
        className="mt-10"
        columns={columns}
        dataSource={data}
        // onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default Hotel;
