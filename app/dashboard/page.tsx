import React from 'react'
import ThemeButton from '../components/ThemeButton'
import useThemeContext from '../context/ThemeContext';

function page() {
  // const {theme} = useThemeContext()
  // console.log(theme);
  
  return (
    <>
     <div className='h-full text-primary bg-bgColor'>page</div>
     <ThemeButton/>
    </>
  )
}

export default page