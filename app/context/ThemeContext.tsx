"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
type ThemeProp = {
    theme : boolean
    toggleTheme: ()=>void
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
    document.body.classList.toggle("dark",!theme);
  }
  const getTheme = () =>{
    const theme = JSON.parse(localStorage.getItem("darkTheme") as string) === true;
    document.body.classList.toggle("dark", theme);
    setTheme(theme);
    return theme;
    }
    useEffect(()=>{
        getTheme()
    },[])
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
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