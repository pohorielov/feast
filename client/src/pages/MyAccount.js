import React from 'react';
import {useLocation} from "react-router-dom";
import {MY_ACCOUNT_ROUTE, MY_PROFILE_ROUTE} from "../utils/consts";

export const MyAccount = () => {
    const location = useLocation()
    const account = location.pathname === MY_ACCOUNT_ROUTE

    return (
        <div className="container">
            <h2 className="mt-5">Мій аккаунт</h2>
            <ul className="nav nav-pills mt-4">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href={MY_PROFILE_ROUTE}>Профіль</a>
                </li>
                <li className="nav-item">
                    <a className={account ? "nav-link active" : "nav-link"} href={MY_ACCOUNT_ROUTE}>Контакти та резюме</a>
                </li>
            </ul>
        </div>
    );
};