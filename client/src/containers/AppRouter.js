import jwt_decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import * as Api from '../http/userAPI';
import { Auth } from '../pages/Auth';
import { Home } from '../pages/Home';
import { Jobs } from '../pages/Jobs';
import { Main } from '../pages/Main';
import { MyAccount } from '../pages/MyAccount';
import { MyDashboard } from '../pages/MyDashboard';
import { MyInbox } from '../pages/MyInbox';
import { MyProfile } from '../pages/MyProfile';
import { Specialists } from '../pages/Specialists';
import { selectStatusClient, selectStatusSpecialist } from '../redux/store/selector';
import { auth } from '../redux/store/userSlice';
import { mainRoutes } from '../routes';

const clientRoutes = [
  {
    path: mainRoutes.main,
    Component: <Home />,
  },
  {
    path: mainRoutes.home,
    Component: <Home />,
  },
  {
    path: mainRoutes.jobs,
    Component: <Jobs />,
  },
  {
    path: mainRoutes.specialists,
    Component: <Specialists />,
  },
];

const specialistRoutes = [
  {
    path: mainRoutes.main,
    Component: <MyDashboard />,
  },
  {
    path: mainRoutes.my.profile,
    Component: <MyProfile />,
  },
  {
    path: mainRoutes.jobs,
    Component: <Jobs />,
  },
  {
    path: mainRoutes.my.inbox,
    Component: <MyInbox />,
  },
  {
    path: mainRoutes.my.dashboard,
    Component: <MyDashboard />,
  },
  {
    path: mainRoutes.my.account,
    Component: <MyAccount />,
  },
];

const publicRoutes = [
  {
    path: mainRoutes.main,
    Component: <Main />,
  },
  {
    path: mainRoutes.login,
    Component: <Auth />,
  },
  {
    path: mainRoutes.signup,
    Component: <Auth />,
  },
];

export const AppRouter = () => {
  const dispatch = useDispatch();
  const client = useSelector(selectStatusClient);
  const specialist = useSelector(selectStatusSpecialist);

  const [routes, setRoutes] = useState(publicRoutes);

  useEffect(() => {
    if (client) {
      setRoutes(clientRoutes);
    } else if (specialist) {
      setRoutes(specialistRoutes);
    } else {
      setRoutes(publicRoutes);
    }
  }, [client, specialist]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const data = jwt_decode(token);
      const end = new Date(data.exp * 1000).getTime();
      const now = new Date().getTime();
      const isExp = now > end; // expired token ??
      console.log({ end, now, isExp });
      if (isExp) {
        // localStorage.removeItem('accessToken');
        Api.refresh();
      }
      // if expired => don`t push auth => refresh token
      // refresh()
      console.log({ data });
      dispatch(auth(data));
    }
  }, []);

  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="/*" element={<Navigate replace to={mainRoutes.main} />} />
    </Routes>
  );
};
