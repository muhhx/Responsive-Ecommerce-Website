import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBeBrDhyJODDTwRqMKt-7QieJqw01Tx48I",
  authDomain: "responsive-ecommerce-website.firebaseapp.com",
  projectId: "responsive-ecommerce-website",
  storageBucket: "responsive-ecommerce-website.appspot.com",
  messagingSenderId: "141060194038",
  appId: "1:141060194038:web:60e4ab3280516259def6d7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//Login, Signup and Signout
export const handleSignUp = ( email: string, password: string ) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const handleLogIn = ( email: string, password: string ) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const handleSignOut = () => {
    return signOut(auth);
}

interface ObjectData {
    email: string;
    canBuy: boolean;
    timestamp: Date;
}

//CRUD operations
export const handleAdd = (docRef: string, object: ObjectData) => {
    const colRef = collection(db, docRef)
    return addDoc(colRef, object)
}