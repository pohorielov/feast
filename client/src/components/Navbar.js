import React from 'react';
import {useSelector} from "react-redux";
import {LOGIN_ROUTE, MAIN_ROUTE, SIGNUP_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";

export const Navbar = () => {
    const location = useLocation()
    const isMain = location.pathname === MAIN_ROUTE
    const client = useSelector(state => state.user.isClient)
    const specialist = useSelector(state => state.user.isSpecialist)

    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            {
                (client) ?
                <div className="container">
                    <a className="navbar-brand" style={{color: "white"}} href={MAIN_ROUTE}>feast</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <button className="btn btn-outline-light ms-auto">клиент1</button>
                        <button className="btn btn-outline-light ms-2">клиент2</button>
                    </div>
                </div>
                : (specialist) ?
                    <div className="container">
                        <a className="navbar-brand" style={{color: "white"}} href={MAIN_ROUTE}>feast</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <button className="btn btn-outline-light ms-auto">спец1</button>
                            <button className="btn btn-outline-light ms-2">спец2</button>
                        </div>
                    </div>
                        :
                        <div className="container">
                            <a className="navbar-brand" style={{color: "white"}} href={MAIN_ROUTE}>feast</a>
                            <div className={isMain ? "collapse navbar-collapse" : "visually-hidden"} id="navbarNav">
                                <a className="btn btn-outline-light ms-auto" href={LOGIN_ROUTE}>Увійти</a>
                                <a className="btn btn-outline-light ms-2" href={SIGNUP_ROUTE}>Реєстрація</a>
                            </div>
                        </div>
            }
        </nav>
    );
};
