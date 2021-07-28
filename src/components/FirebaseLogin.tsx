import { FunctionComponent, useEffect } from 'react';
import { useFirebase } from './Firebase/context';

export const FirebaseLogin: FunctionComponent = () => {
  const firebase = useFirebase();

  useEffect(() => {
    firebase.ui.start('#firebaseui-auth-container', firebase.uiConfig);
  }, [firebase.ui, firebase.uiConfig]);

  return (
    <>
      <h1>Welcome to RPG Initiation</h1>
      <div id="firebaseui-auth-container" />
      <div id="loader">Loading...</div>
    </>
  );
};

export default FirebaseLogin;
