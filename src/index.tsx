import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProjectsService } from './services/Projects';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyB1TPo7ly8ysADsrVa-MMkuJvH51pgXOU0",
  authDomain: "cernspace.firebaseapp.com",
  databaseURL: "https://cernspace.firebaseio.com",
  projectId: "cernspace",
  storageBucket: "cernspace.appspot.com",
  messagingSenderId: "980535812166",
  appId: "1:980535812166:web:c6cb15c1044247340b6a47"
});

if (window['cernspace'] === undefined) {
  window['cernspace'] = new ProjectsService();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
