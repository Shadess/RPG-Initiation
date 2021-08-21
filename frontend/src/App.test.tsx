import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Firebase from 'components/Firebase/firebase';
import { createContext } from 'react';
import { store } from './store/store';
import App from './App';

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

const MockedFirebaseClass = Firebase as jest.Mocked<typeof Firebase>;
const MockedFirebaseInstance = new MockedFirebaseClass();
const MockedFirebaseContext = createContext<Firebase>(MockedFirebaseInstance);

jest.mock('./components/Firebase/context', () => ({
  get useFirebase() {
    const auth = () => jest.fn();
    auth.onAuthStateChanged = jest.fn();
    const ui = () => jest.fn();
    ui.start = jest.fn();
    return () => ({ auth, ui });
  },
}));

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <MockedFirebaseContext.Provider value={MockedFirebaseInstance}>
        <App />
      </MockedFirebaseContext.Provider>
    </Provider>,
  );

  const linkElement = screen.getByText(/Welcome to RPG Initiation/i);
  expect(linkElement).toBeInTheDocument();
});
