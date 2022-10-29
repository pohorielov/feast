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
import { selectStatusClient, selectStatusSpecialist } from '../redux/store/selector';
import { mainRoutes } from '../routes';

export const AppRouter = () => {
  const client = useSelector(selectStatusClient);
  const specialist = useSelector(selectStatusSpecialist);

  const clientRoutes = [
    {
      path: mainRoutes.main,
      Component: <Main />,
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

  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="/*" element={<Navigate replace to={mainRoutes.main} />} />
    </Routes>
  );
};
