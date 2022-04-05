import React, { useState } from 'react';
import { Payment } from './Payment';

export const Individual = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [adress, setAdress] = useState('');
  const [index, setIndex] = useState('');

  return (
    <div className="container">
      <div className="individual grid">
        <div className="individual__block grid__1-3">
          <div className="individual__inputs-container">
            <div className="individual__input-container
            individual__input-container--short"
            >
              <label
                htmlFor="name"
                className="individual__label font-face-gb"
              >
                Ім&apos;я
              </label>
              <input
                id="name"
                type="text"
                className="individual__input"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="individual__input-container
            individual__input-container--short"
            >
              <label
                htmlFor="surname"
                className="individual__label font-face-gb"
              >
                Фамілія
              </label>
              <input
                id="surname"
                type="text"
                className="individual__input"
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="individual__input-container
          individual__input-container--long
          individual__input-container--file-container"
          >
            <label
              htmlFor="company"
              className="individual__label font-face-gb"
            >
              Назва компанії, організації
            </label>
            <input
              id="company"
              type="text"
              className="individual__input"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            <label
              htmlFor="file"
              className="individual__file-label font-face-gb"
            >
              +&nbsp;Логотип
            </label>
            <input
              id="file"
              type="file"
              className="individual__file"
              onChange={(e) => {
                /* eslint-disable-next-line */
                console.log(e.target.files[0]);
              }}
            />
          </div>
          <div className="individual__input-container
          individual__input-container--long"
          >
            <label
              htmlFor="email"
              className="individual__label font-face-gb"
            >
              Email-адрес
            </label>
            <input
              id="email"
              type="email"
              className="individual__input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="individual__input-container
          individual__input-container--long"
          >
            <label
              htmlFor="phone"
              className="individual__label font-face-gb"
            >
              Номер телефону
            </label>
            <input
              id="phone"
              type="tel"
              className="individual__input"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="individual__block grid__4-6">
          <div className="individual__input-container
          individual__input-container--long
          individual__input-container--file-container"
          >
            <label
              htmlFor="company"
              className="individual__label font-face-gb"
            >
              Країна
            </label>
            <input
              id="company"
              type="text"
              className="individual__input"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="individual__inputs-container">
            <div className="individual__input-container
            individual__input-container--short"
            >
              <label
                htmlFor="name"
                className="individual__label font-face-gb"
              >
                Місто
              </label>
              <input
                id="name"
                type="text"
                className="individual__input"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div className="individual__input-container
            individual__input-container--short"
            >
              <label
                htmlFor="surname"
                className="individual__label font-face-gb"
              >
                Штат, район
              </label>
              <input
                id="surname"
                type="text"
                className="individual__input"
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="individual__input-container
          individual__input-container--long"
          >
            <label
              htmlFor="email"
              className="individual__label font-face-gb"
            >
              Адреса
            </label>
            <input
              id="email"
              type="email"
              className="individual__input"
              value={adress}
              onChange={(e) => {
                setAdress(e.target.value);
              }}
            />
          </div>
          <div className="individual__input-container
          individual__input-container--short-single"
          >
            <label
              htmlFor="phone"
              className="individual__label font-face-gb"
            >
              Поштовий індекс
            </label>
            <input
              id="phone"
              type="tel"
              className="individual__input"
              value={index}
              onChange={(e) => {
                setIndex(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <Payment />
    </div>
  );
};
