import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import AvatarApp from './components/AvatarApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AvatarApp />
    <App />
  </React.StrictMode>,
);
