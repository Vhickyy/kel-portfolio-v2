import React from 'react'
import ThemeButton from '../components/ThemeButton';
import Link from 'next/link';
const Login = () => {
  return (
    <>
      <form className="text-inverse w-[90%] sm:w-[30rem] mx-auto flex flex-col items-center justify-center  p-8 gap-4 min-h-[100vh]">
          <div className="grid gap-2 w-full">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' className="bg-transparent text-inverse border border-gray-500 rounded p-2"/>
          </div>
          <div className="grid gap-2 w-full">
              <label htmlFor="password">Password</label>
              <input type="text" id='password' className="bg-transparent text-inverse border border-gray-500 rounded p-2"/>
          </div>
          <div className="w-full grid gap-4">
              <button className="boder bg-primary text-accent w-full py-2 rounded">Login</button>
          </div>
          <p>Don't have an account? <Link href="/register">Register</Link></p>
      </form>
      <div className='fixed bottom-8 right-10  border-2 border-primary p-3 rounded-[50%] text-primary cursor-pointer'>
          <ThemeButton/>
      </div>
    </>
  )
}

export default Login