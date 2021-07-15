import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';

import App from './App.js';

import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

ReactDOM.render(
    <Provider store={store}>
        <>
            <GlobalStyle/>
            <App/>
        </>
    </Provider>,
    document.getElementById('root')
);
