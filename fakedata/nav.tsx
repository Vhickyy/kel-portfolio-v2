import { ReactNode } from 'react';
// import type { IconType } from 'react-icons';
import {FaFacebook, FaYoutube} from 'react-icons/fa';
import {BsFillPersonFill, BsFillLaptopFill} from "react-icons/bs"
type nav = {
    name: string;
    link: string;
    icon?: ReactNode;
} 
export const navData:nav[] = [
    {
        name:"home",
        link: "#home",
        icon: <FaFacebook className="h-[2.7rem] w-[2.7rem] border border-primary shadow-inner inset p-2 rounded-full grid place-items-center" />
    },
    {
        name:"about",
        link: "#about",
        icon: <BsFillPersonFill className="h-[2.7rem] w-[2.7rem] border border-primary shadow-inner inset p-2 rounded-full grid place-items-center"/>
    },
    {
        name:"skill",
        link: "#skill" ,
        icon: <BsFillLaptopFill className="h-[2.7rem] w-[2.7rem] border border-primary shadow-inner inset p-2 rounded-full grid place-items-center"/>
    },
    // {
    //     name:"projects",
    //     link: "#projects",
    //     icon: <BsFillLaptopFill className="h-[2.7rem] w-[2.7rem] border border-primary shadow-inner inset p-2 rounded-full grid place-items-center"/>
    // },
    {
        name:"videos",
        link: "#videos",
        icon: <FaYoutube className="h-[2.7rem] w-[2.7rem] border border-primary shadow-inner inset p-2 rounded-full grid place-items-center"/>
    },
    {
        name:"reviews",
        link: "#reviews",
        icon: <BsFillLaptopFill className="h-[2.7rem] w-[2.7rem] border border-primary shadow-inner inset p-2 rounded-full grid place-items-center"/>
    },
]