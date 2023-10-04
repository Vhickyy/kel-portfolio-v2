"use client"
import { ReactNode, createContext, useContext, useState } from "react";
type ThemeProp = {
    theme : boolean
}
const ThemeContext = createContext({} as ThemeProp);
type ChildrenProp = {
    children : ReactNode
}
export const ThemeContextProvider = ({children}: ChildrenProp) => {
    const [theme,setTheme] = useState(false);
    const toggleTheme = () => {
    setTheme(!theme)
    localStorage.setItem("darkTheme",JSON.stringify(!theme));
    // document.body.classList.toggle("dark",!theme);
  }
    return (
        <ThemeContext.Provider value={{theme}}>
            <div>
                {children}
            </div>
        </ThemeContext.Provider>
    )
};

const useThemeContext = () => {
    return useContext(ThemeContext);
}

export default useThemeContext;