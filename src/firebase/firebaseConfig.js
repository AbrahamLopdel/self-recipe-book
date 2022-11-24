import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,

  authDomain: process.env.REACT_APP_AUTHDOMAIN,

  projectId: process.env.REACT_APP_PROJECTID,

  storageBucket: process.env.REACT_APP_STORAGEBUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,

  appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
// };

// if (process.env.NODE_ENV === "test") {
//   //  testing
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfigTesting);
// } else {
//   //  development/production
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
