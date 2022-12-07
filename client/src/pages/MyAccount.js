import React from 'react';
import { Link } from 'react-router-dom';

import { mainRoutes } from '../routes/index';

export const MyAccount = () => {
  return (
    <div className="container">
      <br />
      <h2 className="mt-5">Мій аккаунт</h2>
      <ul className="nav nav-pills mt-4">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={mainRoutes.my.profile}>
            Профіль
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href={mainRoutes.my.account}>
            Контакти та резюме
          </Link>
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
