import React from 'react'
import ThemeButton from '../../components/ThemeButton'
import useThemeContext from '../../context/ThemeContext';
import Navbar from '../components/Navbar';
import Link from 'next/link';

function dashboard() {
  // const {theme} = useThemeContext()
  // console.log(theme);
  
  return (
    <>
     <div className='h-full bg-bgColor text-textColor'>
      <div>
        <h1 className='text-2xl md:text-4xl font-bold text-center m-6'>Welcome back - <span className='text-primary'>Odogwu Canva. 🙌💛🖤</span></h1>
        <section className="grid place-items-center grid-cols-2 gap-5 mt-12 mb-8 w-[80%] mx-auto md:w-[70%]">
          {/* className='grid md:grid-cols-2 gap-5 mt-12 mb-8 w-[80%] mx-auto md:w-[70%]' */}
          <div className='w-[7rem] text-center'>
            <Link href={"skills"} className='text-primary'>Skills</Link>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div className='w-[7rem] text-center'>
            <Link href={"experience"} className='text-primary'>Experience</Link>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div className='w-[7rem] text-center'>
            <Link href="project" className='text-primary'>Project</Link>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div className='w-[7rem] text-center'>
            <Link href="video" className='text-primary'>Videos</Link>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div className='w-[7rem] text-center'>
            <Link href="./skills" className='text-primary'>Review</Link>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div className='w-[7rem] text-center'>
            <Link href="./skills" className='text-primary'>Contact</Link>
            <p>Design</p>
            <p>100%</p>
          </div>
        </section>
      </div>
     </div>
    </>
  )
}

export default dashboard