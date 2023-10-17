"use client"
import React, {useEffect, useState} from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import useThemeContext from '../context/ThemeContext';

// const darkState = () =>   {
//   let dark;
//   if(typeof window !== "undefined"){
//     dark = JSON.parse(localStorage.getItem("darkTheme") as string);
//   }
//   console.log(dark);
//   return dark 
// }
const ThemeButton = () => {
  const {theme, toggleTheme} = useThemeContext();
    // const [dark,setDark] = useState<boolean>(false);
    // const toggleThemes = () => {
    //   console.log(dark);
    // setDark(!dark)
    // localStorage.setItem("darkTheme",JSON.stringify(!dark));
    // document.body.classList.toggle("dark",!dark);
    // }
    // const getTheme = () =>{
    // const theme = JSON.parse(localStorage.getItem("darkTheme") as string) === true;
    // document.body.classList.toggle("dark", theme);
    // setDark(theme);
    // return theme;
    // }
    // useEffect(()=>{
    //     getTheme()
    //     console.log(dark);
    // },[])
  return (
    <div className='border-2 border-primary p-3 rounded-md text-primary cursor-pointer'>
        {!theme ? <BsFillMoonFill className="w-6 h-6" onClick={toggleTheme}/> : <BsFillSunFill className="w-6 h-6" onClick={toggleTheme}/>}
    </div>
  )
}

export default ThemeButton