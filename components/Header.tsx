import React from 'react'
import {FaFacebook, FaHome, FaSun} from 'react-icons/fa'
export default function Header() {
  return (
    <header className='w-full relative z-10 '>
        <div className='h-[17rem] w-[17rem] bg-[#fee30290] absolute top-[15%] right-0 -z-10 blur-md rounded-full'></div>
        
        <nav className='w-[90%] fixed top-4 md:hidden'>
            <div className='w-[90%] sm:w-[25rem] mx-auto  bg-primary rounded-full py-2 px-[1rem] flex items-center justify-between'>
                <FaHome className="h-[2rem] w-[2rem]"/>
                <FaHome className="h-[2rem] w-[2rem]"/>
                <FaHome className="h-[2rem] w-[2rem]"/>
                <FaHome className="h-[2rem] w-[2rem]"/>
                <FaHome className="h-[2rem] w-[2rem]"/>
            </div>
        </nav>
        <div className="pt-[10rem] md:pt-[4rem] md:w-[95%] lg:w-[90%] mx-auto">
            <p className="text-primary text-lg">Hi, my name is</p>
            <h1 className="text-textlight text-3xl font-extrabold mt-6 tracking-wide md:text-5xl leading-normal md:leading-normal ">Kelechi Augustine Okorie
            <br/>
            - Graphic Designer.</h1>
            <p className='text-textgray leading-loose mt-6 md:w-[40rem] tracking-wider'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut quisquam. Esse doloribus accusamus, asperiores voluptatem corporis sit alias soluta,  quod voluptate temporibus ullam.</p>
        </div>
        <div className='md:w-[95%] lg:w-[90%] mx-auto mt-6 flex gap-4'>
          <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
          <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
          <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
          <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
        </div>
        <div className='md:w-[95%] lg:w-[90%] mx-auto flex gap-4 mt-6'>
          <button className='text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg text-primary font-medium'>Download CV</button>
          <button className='text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg bg-primary font-medium text-accent'>View Portfolio</button>
        </div>
    </header>
  )
}
