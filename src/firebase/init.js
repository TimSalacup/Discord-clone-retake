import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCY9JFsY6JwwqphTXGVNAfrAJJAeskYctk",
  authDomain: "discord-clone-retake.firebaseapp.com",
  databaseURL: "https://discord-clone-retake-default-rtdb.firebaseio.com",
  projectId: "discord-clone-retake",
  storageBucket: "discord-clone-retake.appspot.com",
  messagingSenderId: "518340595933",
  appId: "1:518340595933:web:96db75ca3b72ca97808b34"
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
