import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingIndex } from './Shopping-spa/Shopping-index';
import { FormDemo } from './tutorial/FormDemo';
import { TutorialIndex } from './Components/TutoriaIndex';
import { FakeStoreHome } from './FakeStore/FakeStoreHome';
import { FakeStoreIndex } from './FakeStore/FakeStoreIndex';
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <CookiesProvider>
 <TutorialIndex/>
   </CookiesProvider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
