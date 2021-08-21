import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import { FirebaseContext } from './components/Firebase';

jest.mock('firebase/app', () => {
  const auth = () => jest.fn();
  auth.GoogleAuthProvider = jest.fn();

  return {
    auth,
    initializeApp: jest.fn(),
  };
});

jest.mock('firebaseui', () => ({
  auth: {
    AuthUI: jest.fn(),
  },
  ui: {
    start: jest.fn(),
  },
}));

const FirebaseStub = () => {
  const auth = () => jest.fn();
  auth.onAuthStateChanged = jest.fn();
  auth.app = jest.fn();
  auth.applyActionCode = jest.fn();
  auth.checkActionCode = jest.fn();
  auth.confirmPasswordReset = jest.fn();
  auth.createUserWithEmailAndPassword = jest.fn();
  auth.currentUser = jest.fn();
  auth.fetchSignInMethodsForEmail = jest.fn();
  auth.isSignInWithEmailLink = jest.fn();
  auth.getRedirectResult = jest.fn();
  auth.languageCode = jest.fn();
  auth.settings = jest.fn();
  auth.onIdTokenChanged = jest.fn();
  auth.sendSignInLinkToEmail = jest.fn();
  auth.sendPasswordResetEmail = jest.fn();
  auth.setPersistence = jest.fn();
  auth.signInAndRetrieveDataWithCredential = jest.fn();
  auth.signInAnonymously = jest.fn();
  auth.signInWithCredential = jest.fn();
  auth.signInWithCustomToken = jest.fn();
  auth.signInWithEmailAndPassword = jest.fn();
  auth.signInWithPhoneNumber = jest.fn();
  auth.signInWithEmailLink = jest.fn();
  auth.signInWithPopup = jest.fn();
  auth.signInWithRedirect = jest.fn();
  auth.signOut = jest.fn();
  auth.tenantId = jest.fn();
  auth.updateCurrentUser = jest.fn();
  auth.useDeviceLanguage = jest.fn();
  auth.useEmulator = jest.fn();
  auth.verifyPasswordResetCode = jest.fn();

  const ui = () => jest.fn();
  ui.start = jest.fn();
  ui.disableAutoSignIn = jest.fn();
  ui.setConfig = jest.fn();
  ui.signIn = jest.fn();
  ui.reset = jest.fn();
  ui.delete = jest.fn();
  ui.isPendingRedirect = jest.fn();

  return {
    auth,
    ui,
    uiConfig: {
      callbacks: { signInSuccessWithAuthResult: jest.fn(), uiShown: jest.fn() },
      signInOptions: [],
    },
    StartUI: jest.fn(),
  };
};
const FirebaseMock = (() => FirebaseStub())();

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <FirebaseContext.Provider value={FirebaseMock}>
        <App />,
      </FirebaseContext.Provider>
    </Provider>,
  );
  const linkElement = screen.getByText(/Welcome to RPG Initiation/i);
  expect(linkElement).toBeInTheDocument();
});
