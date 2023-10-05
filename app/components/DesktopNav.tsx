"use client"
import React, { useEffect, useState } from 'react';
import { navData } from '@/fakedata/nav';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Link from 'next/link';
import ThemeButton from './ThemeButton';
// import useThemeContext from '../context/ThemeContext';
function DesktopNav() {
  const [active,setActive] = useState("home");
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
      <ThemeButton/>
     </nav>
  )
}

export default DesktopNav