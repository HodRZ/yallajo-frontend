import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter,
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Auth0Provider
      domain="dev-icxzyxmy.us.auth0.com"
      clientId="NQWKNwO9vR75Iy9yHp6eADo20Ip3wgzI"
      redirectUri={window.location.origin}
    >
      <App />


    </Auth0Provider>,
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
