// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import About from './components/about';

import { BrowserRouter } from 'react-router-dom';

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Home />,
    <About />
  </BrowserRouter>
);
