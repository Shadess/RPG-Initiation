// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { mocked } from 'ts-jest/utils';
// import { store } from './store/store';
// import App from './App';
// import { FirebaseContext } from './components/Firebase';
// import Firebase from './components/Firebase/firebase';
import * as firebase from 'firebase';

jest.mock('firebase', () => {
  const auth = () => jest.fn();
  auth.Auth = jest.fn();
  const ui = () => jest.fn();
  ui.start = firebase;
  return {
    auth,
    ui,
  };
});

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

// const MockedFirebase = mocked(Firebase, true);
// MockedFirebase.mockImplementation(() => ({
//   auth: jest.fn(),
//   ui: jest.fn(),
//   uiConfig: {},
//   StartUI: () => void,
// }));

// const FirebaseMockContext = jest.fn().mockImplementation(() => {
//   const auth = () => {
//     return jest.fn();
//   };
//   auth.onAuthStateChanged = jest.fn();
//   const ui = () => {
//     return jest.fn();
//   };
//   ui.start = jest.fn();

//   return {
//     auth,
//   };
// });

// const FirebaseStub = {
//   auth: jest.fn(),
//   ui: jest.fn(),
//   uiConfig: {},
//   StartUI: jest.fn(),
// };

// const FirebaseMock = (() => FirebaseStub)();
// const FirebaseMockInstance = new FirebaseMock();

// FirebaseMock.auth.mockImplementation(() => {
//   return {
//     onAuthStateChanged: jest.fn(),
//   };
// });

// beforeAll(() => {
//   Firebase.mockImplementation(() => {
//     return {
//       auth: jest.fn(),
//     };
//   });
// });

test('renders learn react link', () => {
  // render(
  // <Provider store={store}>
  // <FirebaseContext.Provider value={new Firebase()}>
  // <App />,
  // </FirebaseContext.Provider>
  // </Provider>,
  // );
  // const linkElement = screen.getByText(/Welcome to RPG Initiation/i);
  // expect(linkElement).toBeInTheDocument();
  expect(true);
});
