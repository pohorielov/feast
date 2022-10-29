import { React } from 'react';
import {
    ADMIN_ROUTE,
    HOME_ROUTE,
    JOBS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE, MY_ACCOUNT_ROUTE, MY_DASHBOARD_ROUTE, MY_INBOX_ROUTE,
    MY_PROFILE_ROUTE,
    SIGNUP_ROUTE,
    SPECIALISTS_ROUTE
} from "./utils/consts";
import {Admin} from "./pages/Admin";
import {MyProfile} from "./pages/MyProfile";
import {Main} from "./pages/Main";
import {Auth} from "./pages/Auth";
import {Home} from "./pages/Home";
import {Jobs} from "./pages/Jobs";
import {Specialists} from "./pages/Specialists";
import {MyInbox} from "./pages/MyInbox";
import {MyDashboard} from "./pages/MyDashboard";
import {MyAccount} from "./pages/MyAccount";


export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
];

export const clientRoutes = [
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
    }
]

export const specialistRoutes = [
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
    }
]


export const publicRoutes = [
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
