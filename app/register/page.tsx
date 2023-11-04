import React from 'react'

const Register = () => {
  return (
    <div className="text-primary w-[90%] sm:w-[30rem] mx-auto flex flex-col items-center justify-center  p-8 gap-4 min-h-[100vh]">
        <div className="grid gap-2 w-full">
            <label htmlFor="full_name" >Full Name</label>
            <input type="text" id='full_name' className="bg-transparent text-accent border border-gray-500 rounded p-2"/>
        </div>
        <div className="grid gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className="bg-transparent text-accent border border-gray-500 rounded p-2"/>
        </div>
        <div className="grid gap-2 w-full">
            <label htmlFor="password">Password</label>
            <input type="text" id='password' className="bg-transparent text-accent border border-gray-500 rounded p-2"/>
        </div>
        <div className="w-full grid gap-4">
            <button className="boder bg-primary text-accent w-full py-2 rounded">Register</button>
            <button className="border border-primary  text-primary w-full py-2 rounded">Sign up with Google</button>
        </div>
    </div>
  )
}

export default Register