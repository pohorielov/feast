import React from 'react';
import { useLocation } from 'react-router-dom';

import { MyCalendar } from '../components/Calendar';
import { MY_ACCOUNT_ROUTE, MY_PROFILE_ROUTE } from '../utils/consts';

export const MyProfile = () => {
  const location = useLocation();
  const profile = location.pathname === MY_PROFILE_ROUTE;

  return (
    <div className="container">
      <br />
      <h2 className="mt-5">Мій аккаунт</h2>
      <ul className="nav nav-pills mt-4">
        <li className="nav-item">
          <a className={profile ? 'nav-link active' : 'nav-link'} aria-current="page" href={MY_PROFILE_ROUTE}>
            Профіль
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={MY_ACCOUNT_ROUTE}>
            Контакти та резюме
          </a>
        </li>
      </ul>
      <hr className="mt-4 mb-4 opacity-25" />
      <form>
        <div className="row g-4 align-items-start">
          <div className="col-auto me-3">
            <label className="col-form-label fw-bold">Спеціальність</label>
          </div>
          <div className="col-4 ms-5">
            <input type="text" id="position" className="form-control" />
            <span id="position" className="form-text">
              Вкажіть, чим саме ви займаєтесь.
            </span>
          </div>
        </div>
        <div className="input-group mt-4">
          <div className="col-auto">
            <label className="col-form-label fw-bold">Вартість послуг</label>
          </div>
          <div className="col-auto ms-5">
            <span className="input-group-text ms-4">₴</span>
          </div>
          <div className="col-1">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="input-group mt-4">
          <div className="col-auto me-4">
            <label htmlFor="customRange3" className="form-label fw-bold">
              Досвід роботи
            </label>
          </div>
          <div className="col-4 mx-5">
            <input type="range" className="form-range" min="0" max="10" step="0.5" id="customRange3" />
          </div>
        </div>
        <div className="input-group mt-4">
          <div className="col-auto me-4">
            <label className="col-form-label me-5 fw-bold">Країна</label>
          </div>
          <div className="col-auto mx-5">
            <select className="form-select mx-2" aria-label="Default select example">
              <option selected>Україна</option>
              <option value="1">Польща</option>
              <option value="2">Турція</option>
              <option value="3">Хорватія</option>
            </select>
          </div>
        </div>
        <div className="row mt-4 align-items-center">
          <div className="col-auto me-5">
            <label className="col-form-label me-3 fw-bold">Місто</label>
          </div>
          <div className="col-4 mx-5">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="row mt-4 align-items-center">
          <div className="col-auto">
            <label className="col-form-label fw-bold">Досвід роботи</label>
          </div>
          <div className="col-4 mx-5">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="row mt-4 align-items-start">
          <div className="col-auto me-4">
            <label className="col-form-label fw-bold">Вільні дати</label>
          </div>
          <div className="col-auto mx-5">
            <MyCalendar />
          </div>
        </div>
        <div className="row mb-4 mx-auto align-items-start">
          <div className="col-auto me-auto">
            <button type="submit" className="btn btn-primary">
              Оновити профіль
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
