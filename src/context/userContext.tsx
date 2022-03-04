import { useState, useContext, useEffect, createContext, ReactNode, SetStateAction } from "react"
import { handleGet } from "../config/firebase"
import { auth } from "../config/firebase"
import { User } from "firebase/auth"
import { Props } from "../types/contexts"

interface Value {
    currentUser: User | null;
    currentUserData: any;
}

const initialValue = {
    currentUser: null,
    currentUserData: null
}

const UserContext = createContext<Value>(initialValue)

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider: React.FC<Props> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [currentUserData, setCurrentUserData] = useState<any>(null)

    useEffect(() => {
        async function handleUserData() {
            if(currentUser !== null) {
                const response = await handleGet("users")
                const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
                const final = data.filter(userData => userData.email === currentUser.email)[0]
                setCurrentUserData(final)
            } else {
                setCurrentUserData(null)
            }
        }
        handleUserData()
    }, [currentUser])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        });

        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={{currentUser, currentUserData}}>
            {children}
        </UserContext.Provider>
    )
}