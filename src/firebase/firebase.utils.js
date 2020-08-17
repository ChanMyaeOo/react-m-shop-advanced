import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDRwSgjDBKlD5WQ-WXK862dA2h_6qYQ_Cg",
  authDomain: "react-m-shop.firebaseapp.com",
  databaseURL: "https://react-m-shop.firebaseio.com",
  projectId: "react-m-shop",
  storageBucket: "react-m-shop.appspot.com",
  messagingSenderId: "1037484213204",
  appId: "1:1037484213204:web:2fab54d0d26b82a9c74c41",
  measurementId: "G-W08DGEW738",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;
  const userRef = firestore.doc(`/users/${authUser.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
