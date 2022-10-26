import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {clientRoutes, publicRoutes, specialistRoutes} from "../routes";
import {HOME_ROUTE, MAIN_ROUTE, MY_PROFILE_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";

export const AppRouter = () => {
    const client = useSelector(state => state.user.isClient)
    const specialist = useSelector(state => state.user.isSpecialist)

    return (
        <Routes>
            {client && clientRoutes.map(({path, Component}) =>
                <>
                    <Route key={path} path={path} element={Component} />
                    <Route path="/*" element={<Navigate replace to={HOME_ROUTE} />} />
                </>
            )}
            {specialist && specialistRoutes.map(({path, Component}) =>
                <>
                    <Route key={path} path={path} element={Component} />,
                    <Route path="/*" element={<Navigate replace to={MY_PROFILE_ROUTE} />} />
                </>
                )}
            {!client && !specialist && publicRoutes.map(({path, Component}) =>
                <>
                    <Route key={path} path={path} element={Component} />,
                    <Route path="/*" element={<Navigate replace to={MAIN_ROUTE} />} />
                </>
            )}
        </Routes>
    );
};