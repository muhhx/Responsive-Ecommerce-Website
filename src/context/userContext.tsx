import { useState, useContext, useEffect, createContext } from "react"
import { handleGet } from "../config/firebase"
import { auth } from "../config/firebase"
import { User } from "firebase/auth"

import { Props } from "../types/contexts"
import { UserData } from "../types/user"

interface Value {
    currentUser: User | null;
    currentUserData: UserData | null;
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
    const [currentUserData, setCurrentUserData] = useState<UserData | null>(null)
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [allUsers, setAllUsers] = useState<any[]>([])

    useEffect(() => {
        async function getUsers() {
            const response = await handleGet("users")
            const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
            setAllUsers(data)
        }
        getUsers()
    }, [currentUser])

    useEffect(() => {
            if(currentUser !== null) {
                const final = allUsers.filter(userData => userData.email === currentUser.email)[0]
                setCurrentUserData(final)
            } else {
                setCurrentUserData(null)
            }
    }, [currentUser, allUsers])

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