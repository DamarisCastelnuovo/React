import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ejpkFfv-6z5vDJi7alfQxqTxabKw1PU",
  authDomain: "relojeriacd.firebaseapp.com",
  projectId: "relojeriacd",
  storageBucket: "relojeriacd.appspot.com",
  messagingSenderId: "364618546926",
  appId: "1:364618546926:web:0433d97d1bf399085cfdff"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);