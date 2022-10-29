import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Auth } from '../pages/Auth';
import { Home } from '../pages/Home';
import { Jobs } from '../pages/Jobs';
import { Main } from '../pages/Main';
import { MyAccount } from '../pages/MyAccount';
import { MyDashboard } from '../pages/MyDashboard';
import { MyInbox } from '../pages/MyInbox';
import { MyProfile } from '../pages/MyProfile';
import { Specialists } from '../pages/Specialists';
import {
  HOME_ROUTE,
  JOBS_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  MY_ACCOUNT_ROUTE,
  MY_DASHBOARD_ROUTE,
  MY_INBOX_ROUTE,
  MY_PROFILE_ROUTE,
  SIGNUP_ROUTE,
  SPECIALISTS_ROUTE,
} from '../routes';

export const AppRouter = () => {
  const client = useSelector((state) => state.user.isClient);
  const specialist = useSelector((state) => state.user.isSpecialist);

  const clientRoutes = [
    {
      path: MAIN_ROUTE,
      Component: <Main />,
    },
    {
      path: HOME_ROUTE,
      Component: <Home />,
    },
    {
      path: JOBS_ROUTE,
      Component: <Jobs />,
    },
    {
      path: SPECIALISTS_ROUTE,
      Component: <Specialists />,
    },
  ];

  const specialistRoutes = [
    {
      path: MAIN_ROUTE,
      Component: <MyProfile />,
    },
    {
      path: MY_PROFILE_ROUTE,
      Component: <MyProfile />,
    },
    {
      path: JOBS_ROUTE,
      Component: <Jobs />,
    },
    {
      path: MY_INBOX_ROUTE,
      Component: <MyInbox />,
    },
    {
      path: MY_DASHBOARD_ROUTE,
      Component: <MyDashboard />,
    },
    {
      path: MY_ACCOUNT_ROUTE,
      Component: <MyAccount />,
    },
  ];

  const publicRoutes = [
    {
      path: MAIN_ROUTE,
      Component: <Main />,
    },
    {
      path: LOGIN_ROUTE,
      Component: <Auth />,
    },
    {
      path: SIGNUP_ROUTE,
      Component: <Auth />,
    },
  ];

  const [routes, setRoutes] = useState(publicRoutes);
  useEffect(() => {
    if (client) {
      setRoutes(clientRoutes);
    } else if (specialist) {
      setRoutes(specialistRoutes);
    } else {
      setRoutes(publicRoutes);
    }
    console.log(client);
    console.log(specialist);
  }, [client, specialist]);

  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      {/*{specialist &&*/}
      {/*  specialistRoutes.map(({ path, Component }) => <Route key={path} path={path} element={Component} />)}*/}
      {/*{publicRoutes.map(({ path, Component }) => (*/}
      {/*  <Route key={path} path={path} element={Component} />*/}
      {/*))}*/}
      <Route path="/*" element={<Navigate replace to={MAIN_ROUTE} />} />
    </Routes>
  );
};
