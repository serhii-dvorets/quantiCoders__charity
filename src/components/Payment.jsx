import classNames from 'classnames';
import React, { useState } from 'react';

export const Payment = () => {
  const [activeType, setActiveType] = useState('2');

  return (
    <>
      <h3 className="title payment__title font-face-geb">Види допомоги</h3>
      <h4 className="title payment__subtitle font-face-gl">
        Ви можете змінити вид допомоги
      </h4>
      <div className="payment">
        <div className="payment__menu">
          <div className="payment__item-container">
            <button
              type="button"
              className="payment__item-logo payment__item-logo--hand"
              onClick={() => {
                setActiveType('1');
              }}
            />
            <div className={classNames('payment__item-text font-face-gb',
              { 'active-type': activeType === '1' })}
            >
              Зробити
            </div>
          </div>
          <div className="payment__item-container">
            <button
              type="button"
              className="payment__item-logo payment__item-logo--wallet"
              onClick={() => {
                setActiveType('2');
              }}
            />
            <div className={classNames('payment__item-text font-face-gb',
              { 'active-type': activeType === '2' })}
            >
              Фінансова допомога
            </div>
          </div>
          <div className="payment__item-container">
            <button
              type="button"
              className="payment__item-logo payment__item-logo--clothes"
              onClick={() => {
                setActiveType('3');
              }}
            />
            <div className={classNames('payment__item-text font-face-gb',
              { 'active-type': activeType === '3' })}
            >
              Матеріальна допомога
            </div>
          </div>
          <div className="payment__item-container">
            <button
              type="button"
              className="payment__item-logo payment__item-logo--heart"
              onClick={() => {
                setActiveType('4');
              }}
            />
            <div className={classNames('payment__item-text font-face-gb',
              { 'active-type': activeType === '4' })}
            >
              Волонтерство
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
