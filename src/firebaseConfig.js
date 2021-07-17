import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQANQMYdGVPmwqseqoqH41MckboGyITqg",
    authDomain: "rpg-initiation.firebaseapp.com",
    databaseURL: "https://rpg-initiation-default-rtdb.firebaseio.com",
    projectId: "rpg-initiation",
    storageBucket: "rpg-initiation.appspot.com",
    messagingSenderId: "418474513340",
    appId: "1:418474513340:web:a6fdb0841e48a2ff7dd1b9",
    measurementId: "G-8YPE2VQB2E"
};

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    // tosUrl: '<your-tos-url>',
    // Privacy policy url.
    // privacyPolicyUrl: '<your-privacy-policy-url>'
};

export {
    firebaseConfig,
    uiConfig,
}