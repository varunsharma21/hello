import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxhnjYiFJHjOc1wN8XActrI2R9yPv3iVo",
  authDomain: "hello-374614.firebaseapp.com",
  projectId: "hello-374614",
  storageBucket: "hello-374614.appspot.com",
  messagingSenderId: "185881293614",
  appId: "1:185881293614:web:85529e7eb12dca1fcb80bf",
  measurementId: "G-F6M0ND788E",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDwG9zCaY_t3H8oBnmLdnro24FOfK2tBf0", //AIzaSyCxhnjYiFJHjOc1wN8XActrI2R9yPv3iVo
//   authDomain: "weconnect-21295.firebaseapp.com",
//   projectId: "weconnect-21295",
//   storageBucket: "weconnect-21295.appspot.com",
//   messagingSenderId: "580642898899",
//   appId: "1:580642898899:web:94955ef28075edc9d4e526",
//   measurementId: "G-1TFWW1D51T",
//   // databaseURL: "https://chatify-e98ae.firebaseio.com",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
