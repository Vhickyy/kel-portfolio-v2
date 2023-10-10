import React from 'react'
import ThemeButton from '../components/ThemeButton'
import useThemeContext from '../context/ThemeContext';
import Navbar from './components/Navbar';

function dashboard() {
  // const {theme} = useThemeContext()
  // console.log(theme);
  
  return (
    <div className='w-[90%] max-w-[1120px] mx-auto'>
      <Navbar/>
     <div className='h-full text-white bg-bgColor'>
      <div>
        <h1 className='text-4xl font-bold text-center m-12'>Welcome back Odogwu Canva.</h1>
        <section className='grid md:grid-cols-2 gap-5 mt-12 w-[80%] mx-auto md:w-[70%]'>
          <div >
            <h3>Skills</h3>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            <h3>Experience</h3>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            <h3>Project</h3>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            <h3>Video</h3>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            <h3>Review</h3>
            <p>Design</p>
            <p>100%</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Design</p>
            <p>100%</p>
          </div>
        </section>
      </div>
     </div>
     {/* <ThemeButton/> */}
    </div>
  )
}

export default dashboard