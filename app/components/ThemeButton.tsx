"use client"
import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import useThemeContext from '../context/ThemeContext';

const ThemeButton = () => {
  const {theme, toggleTheme} = useThemeContext();
  return (
    <>
        {!theme ? <BsFillMoonFill className="w-6 h-6" onClick={toggleTheme}/> : <BsFillSunFill className="w-6 h-6" onClick={toggleTheme}/>}
    </>
  )
}

export default ThemeButton