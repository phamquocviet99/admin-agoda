import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import WaitingComponent from "../widgets/component/WaitingComponent";
import { store, useAppSelector } from "../redux/store";

import { UserAuthSelectors } from "../redux/features/user-auth/user-auth-selector";
import { refreshToken } from "../redux/features/user-auth/user-auth-thunk";
import useAsyncEffect from "use-async-effect";

interface PersistLoginProps {}

const PersistLogin: FC<PersistLoginProps> = () => {
  const [loading, setLoading] = useState(true);

  const accessToken = useAppSelector(UserAuthSelectors.jwtTokenSelector);

  // useAsyncEffect(async (isMounted) => {
  //   const verifyRefreshToken = async () => {
  //     try {
  //       await store.dispatch(refreshToken());
  //     } catch (err) {
  //       setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   !accessToken ? verifyRefreshToken() : setLoading(false);
  //   if (!isMounted()) return;
  // }, []);
  // return loading ? <WaitingComponent /> : <Outlet />;
  return <Outlet />;
};

export default PersistLogin;
