import app from 'firebase/app';
import * as firebaseui from 'firebaseui';

// Add the Firebase products that you want to use
import "firebase/auth";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebaseui-auth-container', uiConfig);

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.ui = new firebaseui.auth.AuthUI(this.auth);

        this.uiConfig = {
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
            // signInSuccessUrl: AppRoutes.INITIATION_MAIN,
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                app.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            // Terms of service url.
            // tosUrl: '<your-tos-url>',
            // Privacy policy url.
            // privacyPolicyUrl: '<your-privacy-policy-url>'
        };
    }

    StartUI() {
        this.ui.start('#firebaseui-auth-container', this.uiConfig);
    }
}

export default Firebase;