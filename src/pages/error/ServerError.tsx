import React, { FC } from "react";

interface ServerErrorProps {}

const ServerError: FC<ServerErrorProps> = ({}) => {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full bg-white">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-red-100 p-4">
          <div className="rounded-full stroke-red-600 bg-red-200 p-4">
            <svg
              className="w-16 h-16"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8H6.01M6 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H14"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17 16L22 21M22 16L17 21"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
          500 - Server error
        </h1>
        <p className="text-slate-600 mt-5 lg:text-lg">
          Rất tiếc, đã xảy ra sự cố. Hãy thử làm mới trang này hoặc
          <br /> cảm nhận liên hệ với chúng tôi nếu vấn đề tồn tại.
        </p>
        <div className="flex justify-center w-full gap-x-5 mt-3">
          <a
            href="/"
            className="px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md shadow-md"
          >
            Quay lại trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
