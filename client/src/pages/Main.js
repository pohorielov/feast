import React from 'react';
import {SIGNUP_ROUTE} from "../utils/consts";
import {TypedText} from "../components/TypedText";

export const Main = () => {
    return (
        <div className="bg-primary text-light">
            <div className="container d-flex justify-content-center align-content-center position-relative" style={{ height: "400px" }}>
                <h1 className="position-absolute bottom-50">Анонімний пошук роботи на feast</h1>
                <a className="btn btn-success position-absolute bottom-0 m-5" href={SIGNUP_ROUTE}>Відправитись на пошуки</a>
                <div className="position-absolute top-50 m-5">
                    <TypedText />
                </div>
            </div>
        </div>
    );
};