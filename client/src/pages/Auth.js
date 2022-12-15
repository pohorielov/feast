import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import * as Api from '../http/userAPI';
import { auth } from '../redux/store/userSlice';
import { mainRoutes } from '../routes/index';

export const Auth = () => {
  const location = useLocation();
  const isSignup = location.pathname === mainRoutes.signup;

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = async (data) => {
    try {
      if (isSignup) {
        const reg = await Api.registration(data.email, data.password, data.role);
        dispatch(auth(reg));
      } else {
        const log = await Api.login(data.email, data.password);
        dispatch(auth(log));
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 254 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-3">{isSignup ? 'Реєстрація на feast' : 'Увійти на feast'}</h2>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="form-control"
          {...register('password', { required: true, min: 3, maxLength: 32 })}
        />
        {isSignup ? (
          <>
            <div className="mt-2 form-check">
              <input
                className="form-check-input"
                id="radio1"
                {...register('role', { required: true })}
                type="radio"
                value="client"
              />
              <label className="form-check-label" htmlFor="radio1">
                Я клієнт - шукаю спеціалістів
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                id="radio2"
                {...register('role', { required: true })}
                type="radio"
                value="specialist"
              />
              <label className="form-check-label" htmlFor="radio2">
                Я кандидат - шукаю пропозиції
              </label>
            </div>
          </>
        ) : (
          <div></div>
        )}

        <button type="submit" className="mt-2 btn btn-primary">
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
      </form>
    </div>
  );
};
