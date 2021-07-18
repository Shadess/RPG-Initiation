import { render, screen } from '@testing-library/react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';

jest.mock('firebase/app', () => {
  const auth = jest.fn();
  auth.GoogleAuthProvider = jest.fn();

  return {
    auth,
    initializeApp: jest.fn()
  }
});

jest.mock('firebaseui', () => {
  return {
    auth: {
      AuthUI: jest.fn()
    }
  }
});

class FirebaseMockContext {
  constructor() {
    this.auth = jest.fn();
    this.auth.onAuthStateChanged = jest.fn();
    this.ui = jest.fn();
    this.ui.start = jest.fn();
  }
}

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <FirebaseContext.Provider value={new FirebaseMockContext()}>
        <App />
      </FirebaseContext.Provider>
    </Provider>);
  const linkElement = screen.getByText(/Welcome to RPG Initiation/i);
  expect(linkElement).toBeInTheDocument();
});
