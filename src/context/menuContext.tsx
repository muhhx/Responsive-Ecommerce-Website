import { useState, createContext, ReactNode, useContext } from "react";
import { Props } from "../types/interfaces"

interface Values {
    isOpen: boolean;
    setIsOpen: (newState: boolean) => void;
}

const initialValues = {
    isOpen: false,
    setIsOpen: () => {}
}

const MenuContext = createContext<Values>(initialValues);

export const useMenu = () => {
    return useContext(MenuContext)
}

export const MenuProvider: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialValues.isOpen)

    return (
        <MenuContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </MenuContext.Provider>
    )
}