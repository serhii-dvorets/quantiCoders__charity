import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Form } from './components/Form';
import { StartPage } from './components/StartPage';

export const App = () => (
  <div className="app">
    <Routes>
      <Route index element={<StartPage />} />
      <Route path="form" element={<Form />} />
    </Routes>
  </div>
);
