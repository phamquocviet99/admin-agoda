import React, { useState } from "react";
import Sidenav from "../widgets/layout/sidenav";
import { routes } from "../routes/routes";
import Header from "../widgets/layout/header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../widgets/layout/footer";
import { useAppSelector } from "../redux/store";
import { Breadcrumb } from "antd";

export default function Dashboard() {
  const isShowSideNav = useAppSelector((state) => state?.showSideBar?.isShow);
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidenav routes={routes} />
      <Header />
      <div className={`px-4  duration-300 ${isShowSideNav && "xl:ml-80"}`}>
        <div className="min-h-screen">
          <Breadcrumb
            separator=">"
            items={[
              {
                title: layout?.charAt(0).toUpperCase() + layout.slice(1),
              },
              {
                title: page?.charAt(0).toUpperCase() + page.slice(1),
              },
            ]}
          />
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}
