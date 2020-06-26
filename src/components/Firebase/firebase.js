import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Fill in these blocks with firebase information, or create a .env file to store the values.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.auth = app.auth();
  }

  // Authentication
  doCreateUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignIn = (email, password) =>
    this.auth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error);
      });

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // Database
  funds = () => this.db.ref('funds/parsedItem');
  fund = (uid) => this.db.ref(`funds/${uid}`);
}

export default Firebase;
