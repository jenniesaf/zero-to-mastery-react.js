import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO6oXQB4xPL2eRmlpQCS2IqCZBOuUsQIs",
  authDomain: "crwn-clothing-db-496ba.firebaseapp.com",
  projectId: "crwn-clothing-db-496ba",
  storageBucket: "crwn-clothing-db-496ba.appspot.com",
  messagingSenderId: "525717743214",
  appId: "1:525717743214:web:0b2dcf78abaa83b529287f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  //if user doesn't exist:
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  //if user exists:
  return userDocRef;
};
