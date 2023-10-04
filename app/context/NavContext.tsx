"use client"
import { ReactNode, createContext, useContext, useState } from "react";

const NavContext = createContext({});

export const NavContextProvider = (children: ReactNode) => {
    const [active,setActive] = useState("home");
    return (
        <NavContext.Provider value={""}>
            {children}
        </NavContext.Provider>
    )
};

const useNavContext = () => {
    return useContext(NavContext);
}

export default useNavContext;