import React from 'react';
import { useLocation } from 'react-router-dom';

import { MAIN_ROUTE } from '../utils/consts';

export const Footer = () => {
  const location = useLocation();
  const isMain = location.pathname === MAIN_ROUTE;

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
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Умови користування
                  </a>
                </td>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Харків
                  </a>
                </td>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Фотограф
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Privacy
                  </a>
                </td>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Київ
                  </a>
                </td>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Відеограф
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Львів
                  </a>
                </td>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Декоратор
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Одеса
                  </a>
                </td>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Ведучий
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="#" style={{ textDecoration: 'none' }}>
                    Дніпро
                  </a>
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
