import { db } from "../config/firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export const addFavProduct = (userId: string, productId: string) => {
    const docRef = doc(db, "users", userId)
    return updateDoc(docRef, {
        favorites: arrayUnion(productId)
    })
}