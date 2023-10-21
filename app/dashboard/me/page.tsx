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
        <h1 className='text-4xl font-bold text-center m-12'>Welcome back - <span className='text-primary'>Odogwu Canva. 🙌💛🖤</span></h1>
        <section className='grid md:grid-cols-2 gap-5 mt-12 w-[80%] mx-auto md:w-[70%]'>
          <div >
            <Link href={"/dashboard/skills"}>Skills</Link>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            <Link href="dashboard/experience">Experience</Link>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            {/* <Link href="./project">Project</Link> */}
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            {/* <Link href="./video">Video</Link> */}
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            {/* <Link href="./skills">Review</Link> */}
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            {/* <Link href="./skills">Contact</Link> */}
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