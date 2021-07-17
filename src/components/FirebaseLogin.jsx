import React from 'react';
import { withFirebase } from './Firebase';

class FirebaseLogin extends React.Component {
    componentDidMount() {
        this.props.firebase.ui.start('#firebaseui-auth-container', this.props.firebase.uiConfig);
    }

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

export default withFirebase(FirebaseLogin);