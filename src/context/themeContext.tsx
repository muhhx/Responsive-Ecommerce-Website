import { useState, useContext, createContext, ReactNode } from "react";
import { Props } from "../helpers/interfaces"

interface Values {
    isLight: boolean;
    setIsLight: (newState: boolean) => void;
}

const initialValues = {
    isLight: true,
    setIsLight: () => {}
}

const ThemeContext = createContext<Values>(initialValues)

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [isLight, setIsLight] = useState<boolean>(initialValues.isLight)

    return (
        <ThemeContext.Provider value={{isLight, setIsLight}}>
            {children}
        </ThemeContext.Provider>
    )
}