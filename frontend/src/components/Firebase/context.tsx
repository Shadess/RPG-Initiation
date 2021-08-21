import { createContext, useContext } from 'react';
import Firebase from './firebase';

export const FirebaseInstance = new Firebase();
export const FirebaseContext = createContext<Firebase>(FirebaseInstance);
export const useFirebase = () => useContext(FirebaseContext);
