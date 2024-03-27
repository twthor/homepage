import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './homepage';
import reportWebVitals from './reportWebVitals';
// import { initializeApp } from 'firebase/app';

// // const firebaseApp = initializeApp( {
// //   apiKey: "AIzaSyByvEIBxkc1HqQ_x-bjlkRcFqyo8VJBZ8I",
// //   authDomain: "homepage-twthor.firebaseapp.com",
// //   projectId: "homepage-twthor",
// //   storageBucket: "homepage-twthor.appspot.com",
// //   messagingSenderId: "856850452766",
// //   appId: "1:856850452766:web:edd89ff65fe1c7188a790f"
// // });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
