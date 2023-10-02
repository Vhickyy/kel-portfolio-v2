import React from 'react'
import {FaFacebook, FaHome, FaSun} from 'react-icons/fa'
export default function Header() {
  return (
    <header className='w-[95%] md:w-[95%] lg:w-[90%] mx-auto relative z-10 '>
        <div className='h-[17rem] w-[10rem] sm:w-[17rem] bg-blur absolute top-[15%] right-0 -z-10 blur-[7rem] rounded-full'></div>
        
        <nav className='w-full h-10 fixed left-0 top-4'>
            <div className='w-[80%] sm:w-[25rem] mx-auto  bg-primary rounded-full py-2 px-[1rem] flex items-center justify-between'> 
                <FaHome className="h-[2rem] w-[2rem]"/>
                <FaHome className="h-[2rem] w-[2rem]"/>
                <FaHome className="h-[2rem] w-[2rem]"/>
                <FaHome className="h-[2rem] w-[2rem]"/>
                <FaHome className="h-[2rem] w-[2rem]"/>
            </div>
        </nav>
        <div className="pt-[10rem] md:pt-[4rem]">
            <p className="text-primary text-lg">Hi, my name is</p>
            <h1 className="text-textColor text-3xl font-extrabold mt-6 tracking-wide md:text-5xl leading-normal md:leading-normal ">Kelechi Augustine Okorie
            <br/>
            - <span className='text-primary'>Graphic Designer.</span></h1>
            <p className='text-textgray leading-loose mt-6 md:w-[40rem] tracking-wider'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut quisquam. Esse doloribus. Esse doloribus.</p>
        </div>
        <div className=' mt-6 flex gap-4'>
          <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
          <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
          <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
          <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
        </div>
        <div className='flex gap-4 mt-6'>
          <button className='text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg text-primary font-medium'>Download CV</button>
          <button className='text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg bg-primary font-medium text-accent'>Portfolio</button>
        </div>
    </header>
  )
}
