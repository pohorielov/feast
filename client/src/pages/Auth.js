import React from 'react';
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE, SIGNUP_ROUTE} from "../utils/consts";
import {useDispatch} from "react-redux";
import {addSpecialist} from "../redux/store/userSlice";

export const Auth = () => {
    const location = useLocation()
    const isSignup = location.pathname === SIGNUP_ROUTE

    const dispatch = useDispatch()

    return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 254 }}
        >
            <form>
                <h2 className="mb-3">{isSignup ? 'Реєстрація на feast' : 'Увійти на feast'}</h2>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Пароль"
                    />
                </div>
                    <div className={isSignup ? "visually-visible" : "visually-hidden"}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault1" value="isClient"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Я клієнт - шукаю спеціалістів
                            </label>
                        </div>
                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                   value="isSpecialist"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Я кандидат - шукаю пропозиції
                            </label>
                        </div>
                    </div>
                <button type="submit" className="btn btn-primary" onClick={() => dispatch(addSpecialist(true))}>{isSignup ? 'Продовжити' : 'Увійти'}</button>
                {isSignup ?
                    <div className="mt-3">
                        <a href={LOGIN_ROUTE} style={{ textDecoration: "none" }}>Я вже маю аккаунт</a>
                    </div>
                    :
                    <div className="mt-3">
                        <a href={SIGNUP_ROUTE} style={{ textDecoration: "none" }}>Реєстрація</a>
                    </div>
                }
            </form>
        </div>
    );
};