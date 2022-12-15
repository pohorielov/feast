import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { MyCalendar } from '../components/Calendar';
import { mainRoutes } from '../routes/index';

export const MyProfile = () => {
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
          <Link className="nav-link active" aria-current="page" to={mainRoutes.my.profile}>
            Профіль
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={mainRoutes.my.account}>
            Контакти та резюме
          </Link>
        </li>
      </ul>
      <hr className="mt-4 mb-4 opacity-25" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-2">
            <label className="col-form-label fw-bold">Спеціальність</label>
          </div>
          <div className="col-md-4 ml-auto">
            <Controller
              render={({ field }) => <input className="form-control" {...field} />}
              name="vacancion"
              control={control}
              defaultValue=""
              className="form-control"
            />
            <span id="position" className="form-text">
              Вкажіть, чим саме ви займаєтесь.
            </span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="col-form-label fw-bold">Вартість послуг</label>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-text">₴</span>
              <Controller
                render={({ field }) => <input className="form-control" {...field} />}
                name="price"
                control={control}
                defaultValue=""
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label htmlFor="range1" className="form-label fw-bold">
              Досвід роботи
            </label>
          </div>
          <div className="col-md-4">
            <input type="range" className="form-range" min="0" max="10" step="0.5" id="range1" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="form-label fw-bold">Країна</label>
          </div>
          <div className="col-md-2 ">
            <select className="form-select" aria-label="Default select example">
              <option selected>Україна</option>
              <option value="1">Польща</option>
              <option value="2">Турція</option>
              <option value="3">Хорватія</option>
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="form-label fw-bold">Місто</label>
          </div>
          <div className="col-md-4">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="form-label fw-bold">Досвід роботи</label>
          </div>
          <div className="col-md-4">
            <input type="text" id="position" className="form-control" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2">
            <label className="form-label fw-bold">Вільні дати</label>
          </div>
          <div className="col-md-4">
            <MyCalendar />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-2 offset-md-2">
            <button type="submit" className="btn btn-primary">
              Оновити профіль
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
