import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { mainRoutes } from '../routes/index';

export const MyAccount = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-2">
            <label className="col-form-label fw-bold">Ім&apos;я та прізвище</label>
          </div>
          <div className="col-md-4 ml-auto">
            <Controller
              render={({ field }) => <input className="form-control" {...field} />}
              name="firstAndLastName"
              control={control}
              defaultValue=""
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="col-form-label fw-bold">Email</label>
          </div>
          <div className="col-md-4 ml-auto">
            <Controller
              render={({ field }) => <input className="form-control" {...field} />}
              name="email"
              control={control}
              defaultValue=""
              className="form-control"
            />{' '}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="col-form-label fw-bold">Телефон</label>
          </div>
          <div className="col-md-4 ml-auto">
            <Controller
              render={({ field }) => <input className="form-control" {...field} />}
              name="phoneNumber"
              control={control}
              defaultValue=""
              className="form-control"
            />{' '}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="col-form-label fw-bold">Telegram</label>
          </div>
          <div className="col-md-4 ml-auto">
            <Controller
              render={({ field }) => <input className="form-control" {...field} />}
              name="telegram"
              control={control}
              defaultValue=""
              className="form-control"
            />{' '}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="col-form-label fw-bold">Портфолио</label>
          </div>
          <div className="col-md-4 ml-auto">
            <Controller
              render={({ field }) => <input className="form-control" {...field} />}
              name="portfolio"
              control={control}
              defaultValue=""
              className="form-control"
            />{' '}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="col-form-label fw-bold me-4">Резюме</label>
          </div>
          <div className="col-md-4 ml-auto">
            <Controller
              render={({ field }) => <input className="form-control" {...field} />}
              name="cv"
              control={control}
              defaultValue=""
              className="form-control"
            />{' '}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 offset-md-2">
            <button type="submit" className="btn btn-primary">
              Зберегти зміни
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
