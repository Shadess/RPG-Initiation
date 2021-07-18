import './App.css';
import React, { useEffect, useState } from 'react';
import FirebaseLogin from './components/FirebaseLogin';
import InitiationMain from './components/InitiationMain';
import { withFirebase } from './components/Firebase';

// class App extends React.Component {
function App(props) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    props.firebase.auth.onAuthStateChanged(aUser => setAuthUser(aUser));
  });

  return (
    <div className="App">
      <header className="App-header">
        { authUser ? <InitiationMain></InitiationMain> : <FirebaseLogin></FirebaseLogin> }
      </header>
    </div>
  );
}

export default withFirebase(App);
