import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat";



const firebaseConfig = {
    apiKey: "AIzaSyCeNaPiRX64XdDVenek5PflCsSPs470AZ4",
    authDomain: "project-manager-5c820.firebaseapp.com",
    projectId: "project-manager-5c820",
    storageBucket: "project-manager-5c820.appspot.com",
    messagingSenderId: "539188572149",
    appId: "1:539188572149:web:6b538ed5acf582a456babc",
    measurementId: "G-M7RNJQTH1E"
};


const app = firebase.initializeApp(firebaseConfig);
const firestoreDb =  firebase.firestore();





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default firestoreDb;