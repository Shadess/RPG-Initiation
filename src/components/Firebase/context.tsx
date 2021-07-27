import React from 'react';
const FirebaseContext = React.createContext<any | null>(null);

export const withFirebase = (Component: React.FunctionComponent) => (props: any) => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;
