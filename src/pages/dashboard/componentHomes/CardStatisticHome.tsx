import React, { FC } from "react";

interface CardStatisticHomeProps {
  icon: any;
  title: string;
  percent: number;
  value: string;
  text: string;
}

const CardStatisticHome: FC<CardStatisticHomeProps> = ({
  icon,
  title,
  percent,
  value,
  text,
}) => {
  return (
    <div className="rounded-xl border border-gray-300 shadow-md bg-white">
      <div className="flex justify-between items-end p-4">
        <div className="bg-black rounded-xl h-12 w-12 flex justify-center items-center text-white text-xl">
          {icon}
        </div>
        <div className="text-end">
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-xl font-bold text-gray-700 mt-1">{value}</p>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-200" />
      <div className="p-4">
        <p className="font-medium text-gray-500">
          <span className="text-green-600">+{percent}%</span> {text}
        </p>
      </div>
    </div>
  );
};

export default CardStatisticHome;
