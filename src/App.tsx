import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Auth from "./layout/Auth";
import { routes } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import PersistLogin from "./context/PersistLogin";
import Error from "./layout/Error";
export let navigation: any = "";
function App() {
  const nav = useNavigate();
  navigation = nav;
  return (
    <>
      <ToastContainer autoClose={4000} />
      <Routes>
        {" "}
        <Route path="*" element={<Navigate replace to="error/not-found" />} />
        <Route element={<PersistLogin />}>
          <Route path="/dashboard" element={<Dashboard />}>
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, element }) => (
                  <Route path={path} element={element} />
                ))
            )}
          </Route>
        </Route>
        <Route path="/" element={<Navigate replace to="dashboard/home" />} />
        <Route path="/auth" element={<Auth />}>
          {routes.map(
            ({ layout, pages }) =>
              layout === "auth" &&
              pages.map(({ path, element }) => (
                <Route path={path} element={element} />
              ))
          )}
        </Route>
        <Route path="/error" element={<Error />}>
          {routes.map(
            ({ layout, pages }) =>
              layout === "error" &&
              pages.map(({ path, element }) => (
                <Route path={path} element={element} />
              ))
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
