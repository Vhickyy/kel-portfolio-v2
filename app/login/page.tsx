import React from 'react'
import ThemeButton from '../components/ThemeButton';
const Login = () => {
  return (
    <>
      <form className="text-primary w-[90%] sm:w-[30rem] mx-auto flex flex-col items-center justify-center  p-8 gap-4 min-h-[100vh]">
          <div className="grid gap-2 w-full">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' className="bg-transparent text-accent border border-gray-500 rounded p-2"/>
          </div>
          <div className="grid gap-2 w-full">
              <label htmlFor="password">Password</label>
              <input type="text" id='password' className="bg-transparent text-accent border border-gray-500 rounded p-2"/>
          </div>
          <div className="w-full grid gap-4">
              <button className="boder bg-primary text-accent w-full py-2 rounded">Login</button>
          </div>
      </form>
      <div className='fixed bottom-8 right-10 md:hidden border-2 border-primary p-3 rounded-[50%] text-primary cursor-pointer'>
          <ThemeButton/>
      </div>
    </>
  )
}

export default Login