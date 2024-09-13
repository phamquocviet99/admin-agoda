import React, { useEffect, useState } from "react";

import { title } from "process";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { routes } from "../../routes/routes";

interface routes {
  routes: any;
}
export default function Sidenav(props: routes) {
  const isShowSideNav = useAppSelector((state) => state?.showSideBar?.isShow);

  return (
    <aside
      className={`${
        isShowSideNav ? "xl:translate-x-0 -translate-x-80" : "-translate-x-80 "
      } fixed inset-0 z-50 my-4 ml-4 top-24 h-[calc(100vh-150px)] w-72 rounded-xl transition-transform duration-300 border-1 border-gray-500 bg-white shadow-md overflow-y-auto `}
    >
      <div className="mx-4 mb-4 mt-2">
        {routes?.map(({ layout, title, pages }, key) => (
          <>
            {layout === "dashboard" && (
              <ul key={key} className="mb-4 flex flex-col gap-1">
                {title && (
                  <li className="mx-3.5 mt-4 mb-2 font-medium text-lg text-gray-900 uppercase opacity-75">
                    {title}
                  </li>
                )}
                {pages?.map(({ icon, name, path }, key) => (
                  <li key={key}>
                    <NavLink to={`/${layout}/${path}`}>
                      {({ isActive }) => (
                        <button
                          className={`text-base ${
                            isActive
                              ? "text-gray-50 bg-gradient-to-l from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50"
                              : " text-gray-500 hover:bg-gray-100 "
                          }  w-full rounded-md py-2.5 mt-1 duration-150 `}
                        >
                          <div className="flex items-center justify-between px-3 gap-2 ">
                            <div className="flex items-center gap-x-4">
                              <div className="text-sm">{icon}</div>
                              <p className="font-medium capitalize">{name}</p>
                            </div>
                          </div>
                        </button>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </div>
    </aside>
  );
}
