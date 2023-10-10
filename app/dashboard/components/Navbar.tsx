import ThemeButton from '@/app/components/ThemeButton'
import React from 'react'
import { FaHamburger } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='text-white py-6'>
        <div className='flex justify-between items-center'>
            <div className='p-4 bg-primary rounded-full text-accent'>KO</div>
            <div className='border-2 border-primary p-3 rounded-md text-primary cursor-pointer md:hidden'>
                <FaHamburger />
            </div>
            <div className='hidden md:flex justify-between w-[70%]'>
                <p>Skills</p>
                <p>Experience</p>
                <p>Videos</p>
                <p>Projects</p>
                <p>Reviews</p>
            </div>
            <div className='hidden md:block'>
                <ThemeButton/>
            </div>
        </div>
    </div>
  )
}

export default Navbar