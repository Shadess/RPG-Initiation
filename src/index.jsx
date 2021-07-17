import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { firebaseConfig, uiConfig } from './firebaseConfig';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import * as firebaseui from 'firebaseui';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
