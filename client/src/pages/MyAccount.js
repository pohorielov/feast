import React from 'react';
import { useLocation } from 'react-router-dom';

import { MY_ACCOUNT_ROUTE, MY_PROFILE_ROUTE } from '../routes/index';

export const MyAccount = () => {
  const location = useLocation();
  const account = location.pathname === MY_ACCOUNT_ROUTE;

  return (
    <div className="container">
      <br />
      <h2 className="mt-5">Мій аккаунт</h2>
      <ul className="nav nav-pills mt-4">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href={MY_PROFILE_ROUTE}>
            Профіль
          </a>
        </li>
        <li className="nav-item">
          <a className={account ? 'nav-link active' : 'nav-link'} href={MY_ACCOUNT_ROUTE}>
            Контакти та резюме
          </a>
        </li>
      </ul>
      <hr className="mt-4 mb-4 opacity-25" />
      <p className="mt-3 mb-5 fs-4">
        Пошук роботи на feast анонімний. Ваші персональні дані побачать лише ті, кому ви відкриєте контакти.
      </p>
      <form>
        <div className="input-group">
          <div className="col-auto me-2">
            <label className="col-form-label fw-bold">Ім&apos;я та прізвище</label>
          </div>
          <div className="col-4 mx-5">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="input-group mt-4">
          <div className="col-auto me-5">
            <label className="col-form-label fw-bold me-5">Email</label>
          </div>
          <div className="col-4 ms-5">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="input-group mt-4">
          <div className="col-auto me-5">
            <label className="col-form-label fw-bold me-4">Телефон</label>
          </div>
          <div className="col-4 ms-5">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="input-group mt-4">
          <div className="col-auto me-5">
            <label className="col-form-label fw-bold me-4">Telegram</label>
          </div>
          <div className="col-4 ms-5">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="input-group mt-4">
          <div className="col-auto me-5">
            <label className="col-form-label fw-bold">Портфолио</label>
          </div>
          <div className="col-4 ms-5">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="input-group mt-4">
          <div className="col-auto me-5">
            <label className="col-form-label fw-bold me-4">Резюме</label>
          </div>
          <div className="col-4 ms-5">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="input-group mt-4 mb-4">
          <div className="col-auto me-auto">
            <button type="submit" className="btn btn-primary">
              Зберегти зміни
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
