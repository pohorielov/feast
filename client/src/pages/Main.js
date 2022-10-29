import React from 'react';

import { TypedText } from '../components/TypedText';
import { SIGNUP_ROUTE } from '../utils/consts';

export const Main = () => {
  return (
    <div>
      <div className="bg-primary text-light">
        <div
          className="container d-flex justify-content-center align-content-center position-relative"
          style={{ height: '400px' }}
        >
          <h1 className="position-absolute bottom-50">Анонімний пошук роботи на feast</h1>
          <a className="btn btn-success position-absolute bottom-0 m-5" href={SIGNUP_ROUTE}>
            Відправитись на пошуки
          </a>
          <div className="position-absolute top-50 m-5">
            <TypedText />
          </div>
        </div>
      </div>
      <div className="container " style={{ width: '800px' }}>
        <p className="m-5 p-5 fs-4 text-center">
          Ви описуєте свій досвід та побажання по зарплаті, а клієнти пропонують роботу. Тільки ви вирішуєте, кому і
          коли відкрити контакти.
        </p>
      </div>
      <div className="bg-success text-light">
        <div
          className="container d-flex justify-content-center align-content-center position-relative"
          style={{ height: '350px' }}
        >
          <h2 className="mt-5 position-absolute top-0 start-50 translate-middle-x">Наймайте на feast</h2>
          <p className="fs-5 position-absolute top-50 start-50 translate-middle text-center">
            Ви сплачуєте 10% від зарплати кандидата, за фактом виконання роботи. Якщо ви нікого не знайшли або кандидат
            не прийняв пропозицію, ви нічого не сплачуєте.
          </p>
          <a className="btn btn-outline-light position-absolute bottom-0 m-5" href={SIGNUP_ROUTE}>
            Розпочати пошук
          </a>
        </div>
      </div>
    </div>
  );
};
