import React from 'react';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
