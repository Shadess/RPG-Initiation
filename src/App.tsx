import firebase from 'firebase';
import { FunctionComponent, useEffect, useState } from 'react';
import { useFirebase } from './components/Firebase/context';
import './App.css';
import FirebaseLogin from './components/FirebaseLogin';
import InitiationMain from './components/InitiationMain';

export const App: FunctionComponent = () => {
  const firebaseObject = useFirebase();
  const [authUser, setAuthUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    firebaseObject.auth.onAuthStateChanged((aUser) => setAuthUser(aUser));
  });

  return (
    <div className="App">
      <header className="App-header">
        {authUser ? <InitiationMain /> : <FirebaseLogin />}
      </header>
    </div>
  );
};

export default App;
