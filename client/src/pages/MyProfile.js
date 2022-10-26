import React from 'react';
import {MY_ACCOUNT_ROUTE, MY_PROFILE_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";

export const MyProfile = () => {
    const location = useLocation()
    const profile = location.pathname === MY_PROFILE_ROUTE

    return (
        <div className="container">
            <h2 className="mt-5">Мій аккаунт</h2>
            <ul className="nav nav-pills mt-4">
                <li className="nav-item">
                    <a className={profile ? "nav-link active" : "nav-link"} aria-current="page" href={MY_PROFILE_ROUTE}>Профіль</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={MY_ACCOUNT_ROUTE}>Контакти та резюме</a>
                </li>
            </ul>
            <hr className="mt-4 mb-4 opacity-25"/>
            <form>
                <div className="row g-4 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Спеціальність</label>
                    </div>
                    <div className="col-auto ms-2">
                        <input type="text" id="position" className="form-control"/>
                        <span id="position" className="form-text">
                            Вкажіть, чим саме ви займаєтесь.
                        </span>
                    </div>
                </div>
                <div className="input-group mt-4">
                    <div className="col-auto">
                        <label className="col-form-label">Вартість послуг</label>
                    </div>
                    <div className="col-auto">
                        <span className="input-group-text ms-4">₴</span>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="input-group mt-4">
                    <div className="col-auto me-4">
                        <label htmlFor="customRange3" className="form-label">Досвід роботи</label>
                    </div>
                    <div className="col-auto">
                        <input type="range" className="form-range" min="0" max="10" step="0.5" id="customRange3"/>
                    </div>
                </div>
                <div className="input-group mt-4">

                </div>
                <div className="row mt-4 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Місто</label>
                    </div>
                    <div className="col-auto ms-2">
                        <input type="text" id="position" className="form-control"/>
                    </div>
                </div>
                <div className="row mt-4 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Досвід роботи</label>
                    </div>
                    <div className="col-auto ms-2">
                        <input type="text" id="position" className="form-control"/>
                    </div>
                </div>
            </form>
        </div>
    );
};