import React from 'react';
import ReactDom from 'react-dom';

import './index.scss';

import Aside from './components/Aside/Aside.js';

function App () {
  return (
    <React.StrictMode>
      <Aside />
      <div>
        <h1>Hello Internet!!!!</h1>
      </div>
    </React.StrictMode>
  );
}

ReactDom.render(<App />, window.document.getElementById('app'));
