"use client"
import React from 'react';
import axios from "axios";
import ThemeButton from '../components/ThemeButton';

const Register = () => {
    const register = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
        const formData = new FormData(form);
        const newUser = Object.fromEntries(formData);
        if(!newUser.email || !newUser.fullName || !newUser.password){
            console.log("provide all fields");
            return
        }
        try {
            const res = await axios.post("/api/register",newUser)
            console.log(res.data());
            form.reset();
        } catch (error:any) {
            console.log(error.response.data);
            
        }
    }
  return (
    <>
    <form onSubmit={register} className="text-primary w-[90%] sm:w-[30rem] mx-auto flex flex-col items-center justify-center  p-8 gap-4 min-h-[100vh]">
        <div className="grid gap-2 w-full">
            <label htmlFor="fullName" >Full Name</label>
            <input type="text" id='fullName' name='fullName' className="bg-transparent text-inverse border border-gray-500 rounded p-2"/>
        </div>
        <div className="grid gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' className="bg-transparent text-inverse  border border-gray-500 rounded p-2"/>
        </div>
        <div className="grid gap-2 w-full">
            <label htmlFor="password">Password</label>
            <input type="text" id='password' name="password" className="bg-transparent text-inverse border border-gray-500 rounded p-2"/>
        </div>
        <div className="w-full grid gap-4">
            <button className="boder bg-primary text-accent w-full py-2 rounded">Register</button>
        </div>
    </form>
    <div className='fixed bottom-8 right-10 md:hidden border-2 border-primary p-3 rounded-[50%] text-primary cursor-pointer'>
        <ThemeButton/>
    </div>
    </>
  )
}

export default Register