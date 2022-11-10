import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { selectEmail, selectStatusClient, selectStatusSpecialist } from '../redux/store/selector';
import { addSpecialist, addClient } from '../redux/store/userSlice';
import { mainRoutes } from '../routes/index';

export const Navbar = () => {
  const location = useLocation();
  const isMain = location.pathname === mainRoutes.main;
  const client = useSelector(selectStatusClient);
  const specialist = useSelector(selectStatusSpecialist);
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  return (
    <>
      {client ? (
        <nav className="navbar navbar-expand-lg bg-dark p-0 fixed-top">
          <div className="container">
            <Link className="navbar-brand fs-3 fw-bold" style={{ color: 'white' }} to={mainRoutes.home}>
              feast
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <button className="btn btn-outline-light ms-auto">клиент1</button>
              <button className="btn btn-outline-light ms-2" onClick={() => dispatch(addClient(false))}>
                Вийти
              </button>
            </div>
          </div>
        </nav>
      ) : specialist ? (
        <nav className="navbar navbar-expand-lg bg-light p-0 border fixed-top">
          <div className="container">
            <Link className="navbar-brand fs-3 fw-bold" style={{ color: 'black' }} to={mainRoutes.my.dashboard}>
              feast
            </Link>
            <div className="collapse navbar-collapse navbar-nav" id="navbarNav">
              <Link className="nav-link ms-5" to={mainRoutes.my.inbox}>
                Пропозиції
              </Link>
              <Link className="nav-link ms-3" to={mainRoutes.jobs}>
                Вакансії
              </Link>
              <Link className="nav-link ms-auto " to={mainRoutes.my.profile}>
                {email}
              </Link>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to={mainRoutes.my.profile}>
                      Мій профіль
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => dispatch(addSpecialist(false))}>
                      Вийти
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item opacity-50" to="#">
                      Профіль клієнта
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-primary p-0">
          <div className="container">
            <Link className="navbar-brand fs-3 fw-bold" style={{ color: 'white' }} to={mainRoutes.main}>
              feast
            </Link>
            <div className={isMain ? 'collapse navbar-collapse' : 'visually-hidden'} id="navbarNav">
              <Link className="btn btn-outline-light ms-auto" to={mainRoutes.login}>
                Увійти
              </Link>
              <Link className="btn btn-outline-light ms-2" to={mainRoutes.signup}>
                Реєстрація
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
