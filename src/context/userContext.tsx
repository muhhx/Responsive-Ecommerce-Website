import { auth } from "../config/firebase"
import { useState, useContext, useEffect, createContext, ReactNode, SetStateAction } from "react"
import { User } from "firebase/auth"

interface Props {
    children: ReactNode;
}

interface Value {
    currentUser: User | null;
}

const initialValue = {
    currentUser: null
}

const UserContext = createContext<Value>(initialValue)

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider: React.FC<Props> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        });

        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={{currentUser}}>
            {children}
        </UserContext.Provider>
    )
}