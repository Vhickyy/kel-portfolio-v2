"use client"
import { ReactNode, createContext, useContext, useState } from "react";
type navProp = {
    active : string
    changeActive: (active:string,e?:React.MouseEvent<HTMLAnchorElement, MouseEvent>,desktop?:boolean) => void
    shouldClick: boolean,
    // setShouldClick:  Dispatch<SetStateAction<boolean>>
}
const NavContext = createContext({} as navProp);

export const NavContextProvider = ({children}: {children: ReactNode}) => {
    const [active,setActive] = useState("home");
    const [shouldClick, setShouldClick] = useState(true)
    const changeActive = (active:string,e?:React.MouseEvent<HTMLAnchorElement, MouseEvent>,desktop?:boolean) => {
        e?.preventDefault();
        // setShouldClick(false)/
        setActive(active)
        // console.log(e.currentTarget.getAttribute("href"))
        if(e){
            const href = e?.currentTarget.getAttribute("href")!;
            const target:HTMLDivElement = document.querySelector(href)!;
            let scroll = 0;
            if(desktop){
                scroll = target.offsetTop - 70
            }else{
                scroll = target.offsetTop - 50
            }
            if(href == "#home"){
                scroll = 0
            }
            window.scrollTo({
            left: 0,
            top: scroll,
            behavior: "smooth"
            })
        }
    }
    return (
        <NavContext.Provider value={{active, changeActive,shouldClick}}>
            {children}
        </NavContext.Provider>
    )
};

const useNavContext = () => {
    return useContext(NavContext);
}

export default useNavContext;