import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    HOME_ROUTE,
    JOBS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    MY_DASHBOARD_ROUTE, MY_INBOX_ROUTE,
    MY_PROFILE_ROUTE,
    SIGNUP_ROUTE
} from "../utils/consts";
import {useLocation} from "react-router-dom";
import {specialistAction} from "../redux/store/actions";

export const Navbar = () => {
    const location = useLocation()
    const isMain = location.pathname === MAIN_ROUTE
    const client = useSelector(state => state.user.isClient)
    const specialist = useSelector(state => state.user.isSpecialist)
    const email = useSelector(state => state.user.email)

    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(specialistAction(false))
    }

    return (
        <>
            {
                (client) ?
                    <nav className="navbar navbar-expand-lg bg-dark p-0">
                        <div className="container">
                            <a className="navbar-brand fs-3 fw-bold" style={{color: "white"}} href={HOME_ROUTE}>feast</a>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <button className="btn btn-outline-light ms-auto">клиент1</button>
                                <button className="btn btn-outline-light ms-2">клиент2</button>
                            </div>
                        </div>
                    </nav>
                : (specialist) ?
                        <nav className="navbar navbar-expand-lg bg-light p-0 border">
                            <div className="container">
                                <a className="navbar-brand fs-3 fw-bold" style={{color: "black"}} href={MY_DASHBOARD_ROUTE}>feast</a>
                                <div className="collapse navbar-collapse navbar-nav" id="navbarNav">
                                    <a className="nav-link ms-5" href={MY_INBOX_ROUTE}>Пропозиції</a>
                                    <a className="nav-link ms-3" href={JOBS_ROUTE}>Вакансії</a>
                                    <a className="nav-link ms-auto " href={MY_PROFILE_ROUTE}>
                                        {email}
                                    </a>
                                    <div className="dropdown">
                                        <button className="btn btn-light dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href={MY_PROFILE_ROUTE}>Мій профіль</a></li>
                                            <li><a onClick={() => logOut()} className="dropdown-item" href="#">Вийти</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item opacity-50" href="#">Профіль клієнта</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        :
                        <nav className="navbar navbar-expand-lg bg-primary p-0">
                            <div className="container">
                                <a className="navbar-brand fs-3 fw-bold" style={{color: "white"}} href={MAIN_ROUTE}>feast</a>
                                <div className={isMain ? "collapse navbar-collapse" : "visually-hidden"} id="navbarNav">
                                    <a className="btn btn-outline-light ms-auto" href={LOGIN_ROUTE}>Увійти</a>
                                    <a className="btn btn-outline-light ms-2" href={SIGNUP_ROUTE}>Реєстрація</a>
                                </div>
                            </div>
                        </nav>
            }
        </>
    );
};
