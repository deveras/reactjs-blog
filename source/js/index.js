import React from 'react';
import ReactDom from 'react-dom';

import './index.scss';

import Aside from './components/Aside/Aside.js';
import Home from './pages/Home/Home.js';

function App () {
  return (
    <React.StrictMode>
      <Aside />
      <Home />
    </React.StrictMode>
  );
}

ReactDom.render(<App />, window.document.getElementById('app'));
