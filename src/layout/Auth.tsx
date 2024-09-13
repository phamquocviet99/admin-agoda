import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

export default function Auth() {
  return (
    <div className="relative min-h-screen w-full">
      <Outlet />
    </div>
  );
}
