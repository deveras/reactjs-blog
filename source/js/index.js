import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';

function App () {
  return (
    <React.StrictMode>
      <div>
        <h1>Hello Internet</h1>
      </div>
    </React.StrictMode>
  );
}

ReactDom.render(<App />, window.document.getElementById('app'));
