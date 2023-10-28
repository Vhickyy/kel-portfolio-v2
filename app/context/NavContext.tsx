"use client"
import { ReactNode, createContext, useContext, useState } from "react";
type navProp = {
    active : string
    changeActive: (active:string) => void
}
const NavContext = createContext({} as navProp);

export const NavContextProvider = ({children}: {children: ReactNode}) => {
    const [active,setActive] = useState("home");
    const changeActive = (active:string) => {
        setActive(active)
        console.log(active);
        
    }
    return (
        <NavContext.Provider value={{active, changeActive}}>
            {children}
        </NavContext.Provider>
    )
};

const useNavContext = () => {
    return useContext(NavContext);
}

export default useNavContext;