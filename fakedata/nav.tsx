import { ReactNode } from 'react';
// import type { IconType } from 'react-icons';
import {FaFacebook, FaYoutube, FaHome} from 'react-icons/fa';
import {BsFillPersonFill, BsFillLaptopFill} from "react-icons/bs"
type nav = {
    name: string;
    link: string;
    icon?: ReactNode;
} 
// className="h-[2.7rem] w-[2.7rem] border border-primary shadow-inner inset p-2 rounded-full grid place-items-center "
export const navData:nav[] = [
    {
        name:"home",
        link: "#home",
        icon: <FaHome className="h-[2.6rem] w-[2.6rem]"/>
    },
    {
        name:"about",
        link: "#about",
        icon: <BsFillPersonFill className="h-[2.6rem] w-[2.6rem]"/>
    },
    {
        name:"skill",
        link: "#skill" ,
        icon: <BsFillLaptopFill className="h-[2.6rem] w-[2.6rem]"/>
    },
    // {
    //     name:"projects",
    //     link: "#projects",
    //     icon: <BsFillLaptopFill className="h-[2.7rem] w-[2.7rem] border border-primary shadow-inner inset p-2 rounded-full grid place-items-center"/>
    // },
    {
        name:"videos",
        link: "#videos",
        icon: <FaYoutube className="h-[2.6rem] w-[2.6rem]"/>
    },
    {
        name:"reviews",
        link: "#reviews",
        icon: <BsFillLaptopFill className="h-[2.6rem] w-[2.6rem]"/>
    },
]