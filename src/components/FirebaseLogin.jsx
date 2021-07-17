import React from 'react';

export default class FirebaseLogin extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome to RPG Initiation</h1>
                <div id="firebaseui-auth-container"></div>
                <div id="loader">Loading...</div>
            </>
        )
    }
}