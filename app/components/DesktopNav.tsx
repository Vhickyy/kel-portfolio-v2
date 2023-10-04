"use client"
import React, { useEffect, useState } from 'react';
import { navData } from '@/fakedata/nav';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Link from 'next/link';
import useThemeContext from '../context/ThemeContext';
function DesktopNav() {
  const getTheme = () =>{
  const theme = JSON.parse(localStorage.getItem("darkTheme") as string) === true;
  document.body.classList.toggle("dark", theme);
  console.log(theme);
  return theme;
}
const darkState = () =>   {
  let dark;
  if(typeof window !== "undefined"){
    dark = JSON.parse(localStorage.getItem("darkTheme") as string);
  }
  // console.log(dark);
  return dark
}
  const [dark,setDark] = useState(darkState());
  const [active,setActive] = useState("home");
  const toggleTheme = () => {
    setDark(!dark)
    localStorage.setItem("darkTheme",JSON.stringify(!dark));
    // document.body.classList.toggle("dark",!dark);
  }
  const {theme} = useThemeContext()
  
  useEffect(()=>{
    // getTheme()
    setDark(getTheme())
  },[])
  return (
    <nav className='hidden md:flex sticky top-0 w-[95%] lg:w-[90%] mx-auto justify-between items-center pt-8 z-20 text-textgray bg-bgColor'>
      <div className='p-4 bg-primary rounded-full text-accent'>KO</div>
      {navData.map((nav,index)=>{
        return (
          <div key={index}>
            <Link href={nav.link} className='capitalize'>{nav.name}</Link>
            {active === nav.name ? <div className='h-1 w-full bg-primary rounded'></div> : null}
          </div>
        )
      })}
      <div className='border-2 border-primary p-3 rounded-md text-primary cursor-pointer'>
        {!dark ? <BsFillMoonFill className="w-6 h-6" onClick={toggleTheme}/> : <BsFillSunFill className="w-6 h-6" onClick={toggleTheme}/>}
      </div>
     </nav>
  )
}

export default DesktopNav