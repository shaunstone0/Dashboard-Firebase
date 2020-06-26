// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

const FirebaseContext = React.createContext({});

export const AppContextProvider = FirebaseContext.Provider;
export const AppContextConsumer = FirebaseContext.Consumer;

export const withFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
