import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { addSpecialist } from '../redux/store/userSlice';
import { mainRoutes } from '../routes/index';

export const Auth = () => {
  const location = useLocation();
  const isSignup = location.pathname === mainRoutes.signup;

  const dispatch = useDispatch();

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 254 }}
    >
      <div>
        <h2 className="mb-3">{isSignup ? 'Реєстрація на feast' : 'Увійти на feast'}</h2>
        <div className="mb-3">
          <input
            type="email"
            className="form-control mb-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Пароль" />
        </div>
        <div className={isSignup ? 'visually-visible' : 'visually-hidden'}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="client"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Я клієнт - шукаю спеціалістів
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="specialist"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Я кандидат - шукаю пропозиції
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => dispatch(addSpecialist(true))}>
          {isSignup ? 'Продовжити' : 'Увійти'}
        </button>
        {isSignup ? (
          <div className="mt-3">
            <Link to={mainRoutes.login} style={{ textDecoration: 'none' }}>
              Я вже маю аккаунт
            </Link>
          </div>
        ) : (
          <div className="mt-3">
            <Link to={mainRoutes.signup} style={{ textDecoration: 'none' }}>
              Реєстрація
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
