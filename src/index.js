import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'css/index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="boolks.us.auth0.com"
      clientId="w4JB6HkVexu5IFL9v7KMSWZfdYYnri4X"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
