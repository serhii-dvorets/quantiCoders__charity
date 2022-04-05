import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Company } from './Company';
import { Individual } from './Individual';

export const Form = () => {
  const [button, setButton] = useState('individual');

  return (
    <div className="form">
      <h2 className="title form__title font-face-geb">Заповніть форму</h2>
      <Link to="/" className="form__close-button animation" />
      <div className="form__switcher">
        <button
          type="button"
          className={classNames(
            'form__link-button form__link-button--left font-face-gb',
            { active: button === 'individual' },
          )}
          onClick={() => {
            setButton('individual');
          }}
        >
          Фіз. особа
        </button>
        <button
          type="button"
          className={classNames(
            'form__link-button form__link-button--right font-face-gb',
            { active: button === 'company' },
          )}
          onClick={() => {
            setButton('company');
          }}
        >
          Юр. особа
        </button>
      </div>
      {button === 'individual' ? (
        <Individual />
      ) : (
        <Company />
      )}
    </div>
  );
};
