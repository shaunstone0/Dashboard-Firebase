import {
  AppContextProvider,
  AppContextConsumer,
  withFirebase,
} from './Context';
import Firebase from './firebase';

export default Firebase;

export { AppContextConsumer, AppContextProvider, withFirebase };
