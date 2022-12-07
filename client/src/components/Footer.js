import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { mainRoutes } from '../routes/index';

export const Footer = () => {
  const location = useLocation();
  const isMain = location.pathname === mainRoutes.main;

  return (
    <footer>
      {isMain ? (
        <div className="container mt-5">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">feast@feast.ua</th>
                <th scope="col">Вакансії за містом</th>
                <th scope="col">За спеціальністью</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Умови користування
                  </Link>
                </td>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Харків
                  </Link>
                </td>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Фотограф
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Privacy
                  </Link>
                </td>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Київ
                  </Link>
                </td>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Відеограф
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Львів
                  </Link>
                </td>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Декоратор
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Одеса
                  </Link>
                </td>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Ведучий
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Дніпро
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 style={{ opacity: 0.5 }}>feast</h3>
          <p style={{ opacity: 0.5 }}>© 2022 feast.ua</p>
        </div>
      ) : (
        <>
          <hr />
          <div className="container mt-3">
            <h3 style={{ opacity: 0.5 }}>feast</h3>
            <p style={{ opacity: 0.5 }}>
              © 2022 feast.ua{' '}
              <a style={{ textDecoration: 'none', color: 'black' }} href="#">
                feast@feast.ua
              </a>
            </p>
          </div>
        </>
      )}
    </footer>
  );
};
