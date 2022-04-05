import React from 'react';
import { Link } from 'react-router-dom';

export const StartPage = () => (
  <div className="start-page">
    <Link
      to="form"
      className="start-page__button animation font-face-geb"
    >
      Допомогти
    </Link>
  </div>
);
