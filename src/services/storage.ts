import { storage } from "../config/firebase"
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

export const insertImage = async (file: File) => {
    const newFile = ref(storage, `images/${file.name}`)

    const upload = await uploadBytes(newFile, file)
    const photoUrl = await getDownloadURL(upload.ref)
    
    return photoUrl
}