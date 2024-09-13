import React, { FC } from "react";
import { RxReload } from "react-icons/rx";

interface HeaderPageProps {
  title: string;
  onClick: any;
}

const HeaderPage: FC<HeaderPageProps> = ({ title, onClick }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-medium">{title}</h2>
      <button
        onClick={onClick}
        className="gap-x-2 rounded-md shadow-md px-3 py-2 bg-transparent hover:bg-gray-200 text-black font-medium border border-gray-500"
      >
        <RxReload className="text-2xl" />
      </button>
    </div>
  );
};

export default HeaderPage;
