import React from 'react';
import ReactDOM from 'react-dom';

import NextApp from './NextApp';
import reportWebVitals from './reportWebVitals';

// Wrap the rendering in a function
const render = Component => {
  ReactDOM.render(
    <React.StrictMode>
      <Component/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Render once
render(NextApp);

