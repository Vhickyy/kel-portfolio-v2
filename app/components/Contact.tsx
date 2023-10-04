import React from 'react'
import { FaHome, FaLocationArrow } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';


export default function Contact() {
  return (
    <section className='pt-[8rem]'>
      <div className='flex items-center gap-4'>
        <h2 className='font-extrabold text-3xl text-primary'> 05.</h2>
        <h2 className='font-extrabold text-3xl text-accent'>Contact Me</h2>
      </div>
      <div className='mt-10 flex flex-col gap-6 sm:gap-0 sm:flex-row-reverse justify-between '>
        <div className='sm:w-[38%] flex flex-col gap-5'>
          <div className='flex items-center gap-3 sm:flex-col sm:items-start lg:flex-row lg:items-center'>
            <ImLocation2  className="text-primary w-[2.5rem] h-[2rem]"/>
            <div>
              <h5 className='font-bold text-lg tracking-wider text-textColor'>Location</h5>
              <p className='text-textgray'>Lagos</p>
            </div>
          </div>
          <div className='flex items-center gap-3 sm:flex-col sm:items-start lg:flex-row lg:items-center'>
            <MdEmail  className="text-primary w-[2.5rem] h-[2rem]"/>
            <div>
              <h5 className='font-bold text-lg tracking-wider text-textColor'>Email</h5>
              <p className='text-textgray'>vvvvvvvvvvvvvvv@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center gap-3 sm:flex-col sm:items-start lg:flex-row lg:items-center'>
            <BsTelephoneFill  className="text-primary w-[2.5rem] h-[2rem]"/>
            <div>
              <h5 className='font-bold text-lg tracking-wider text-textColor'>Phone Number</h5>
              <p className='text-textgray'>+2340000000000</p>
            </div>
          </div>
        </div>
        <form className='w-full sm:w-[58%] rounded-md grid gap-4'>
          <div className='bg-white py-2 px-4 rounded-md shadow-md'>
            <label htmlFor="name" className='block text-sm text-textgray'>Name</label>
            <input type="name" id='name' className='w-full border-none outline-none caret-primary'/>
          </div>
          <div className='bg-white py-2 px-4 rounded-md shadow-md'>
            <label htmlFor="email" className='block text-sm text-textgray'>Email</label>
            <input type="name" id='email' className='w-full border-none border-0 outline-none caret-primary'/>
          </div>
          <div className='bg-white py-2 px-4 rounded-md shadow-md'>
            <label htmlFor="message" className='block text-sm text-textgray'>Message</label>
            <textarea name="message" id="message" className='w-full border-none border-0 h-[10rem] outline-none caret-primary'></textarea>
          </div>
          <button className='bg-primary w-fit mx-auto px-4 py-3 rounded-md flex justify-center items-center gap-3 text-sm mt-2'>Send Message <FaHome/></button>
        </form>
      </div>
    </section>
  )
}
