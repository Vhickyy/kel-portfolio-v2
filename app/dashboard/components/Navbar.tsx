import ThemeButton from '@/app/components/ThemeButton'
import Link from 'next/link'
import React from 'react'
import { FaHamburger } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='text-textgray py-6 sticky top-0 bg-bgColor shadow-lg'>
        <div className='flex justify-between items-center'>
            <Link href={"/"} className='p-4 bg-primary rounded-full text-accent'>KO</Link>
            <div className='border-2 border-primary p-3 rounded-md text-primary cursor-pointer md:hidden'>
                <FaHamburger />
            </div>
            <div className='hidden md:flex justify-between w-[70%]'>
                <Link href={"skills"}>Skills</Link>
                <Link href={"experience"}>Experience</Link>
                <Link href={"video"}>Videos</Link>
                <Link href={"project"}>Projects</Link>
                <Link href={"review"}>Reviews</Link>
            </div>
            <div className='hidden md:block border-2 border-primary p-3 rounded-md text-primary cursor-pointer'>
                <ThemeButton/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar