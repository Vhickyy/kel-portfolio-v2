"use client"
import React, { useEffect, useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
// const getTheme = () =>{
//   const theme = JSON.parse(localStorage.getItem("darkTheme") as string) === true;
//   document.body.classList.toggle("dark", theme);
//   console.log(theme)
//   return theme;
// }
function DesktopNav() {
  const getTheme = () =>{
  const theme = JSON.parse(localStorage.getItem("darkTheme") as string) === true;
  document.body.classList.toggle("dark", theme);
  return theme;
}
  const [dark,setDark] = useState(JSON.parse(localStorage.getItem("darkTheme") as string) === true || false)
  const toggleTheme = () => {
    setDark(!dark)
    localStorage.setItem("darkTheme",JSON.stringify(!dark));
    document.body.classList.toggle("dark",!dark);
  }
  
  useEffect(()=>{
    getTheme()
  },[])
  return (
    <nav className='hidden md:flex sticky top-0 w-[95%] lg:w-[90%] mx-auto justify-between items-center pt-8 z-20 text-textgray bg-bgColor'>
      <div className='p-4 bg-primary rounded-full text-accent'>KO</div>
      <p>Home</p>
      <p>About</p>
      <p>Videos</p>
      <p>Projects</p>
      <p>Contact</p>
      <div className='border-2 border-primary p-3 rounded-md text-primary'>
        {!dark ? <BsFillSunFill className="w-6 h-6" onClick={toggleTheme}/> : <BsFillMoonFill className="w-6 h-6" onClick={toggleTheme}/>}
      </div>
     </nav>
  )
}

export default DesktopNav