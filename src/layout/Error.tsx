import React, { FC } from "react";
import { Outlet } from "react-router-dom";

interface ErrorProps {}

const Error: FC<ErrorProps> = ({}) => {
  return (
    <div className="relative min-h-screen w-full">
      <Outlet />
    </div>
  );
};

export default Error;
