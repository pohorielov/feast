import {
    ADMIN_ROUTE,
    HOME_ROUTE,
    JOBS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    MY_ROUTE,
    SIGNUP_ROUTE,
    SPECIALISTS_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import My from "./pages/My";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Specialists from "./pages/Specialists";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />,
    }
]

export const clientRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login />,
    },
    {
        path: SIGNUP_ROUTE,
        Component: <SignUp />,
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
    }
]

export const specialistRoutes = [
    {
        path: MY_ROUTE,
        Component: <My />,
    },
    {
        path: LOGIN_ROUTE,
        Component: <Login />,
    },
    {
        path: SIGNUP_ROUTE,
        Component: <SignUp />,
    },
    {
        path: JOBS_ROUTE,
        Component: <Jobs />,
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main />,
    }
]
