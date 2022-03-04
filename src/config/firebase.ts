import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth"
import { collection, addDoc, getDocs } from "firebase/firestore"

import { UserData } from "../types/user";

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
export const storage = getStorage(app);

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

export const handleReset = ( email: string ) => {
    return sendPasswordResetEmail(auth, email)
}

//CRUD operations
export const handleAdd = (docRef: string, object: UserData) => {
    const colRef = collection(db, docRef)
    return addDoc(colRef, object)
}

export const handleAddProduct = (docRef: string, object: any) => {
    const colRef = collection(db, docRef)
    return addDoc(colRef, object)
}

export const handleGet = (docRef: string) => {
    const colRef = collection(db, docRef)
    return getDocs(colRef)
}