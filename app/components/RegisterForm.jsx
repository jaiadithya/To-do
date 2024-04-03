'use client'

import React, { useState } from 'react'

const Register = () => {

const [name, setName] =useState("") ;
const [email, setEmail] =useState("") ;
const [password, setPassword] =useState("") ;
const [error, serError] =useState("") ;

const handleSubmit = async (e)=> {

    if (!name || !email || !password) {
        serError ("All Fields are mandatory");
        return;
    }

    try {

        const resUserExists = await fetch ('api/userExists',{
            method: "POST",
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify({ email }),
        });

        const { user } = await resUserExists.json();
        
        if (user) {
            setError ("User Already exists");
            return;
        }

        const res = await fetch ('api/register',{
            method: "POST",
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify({
                name, email, password,
            }),
        });

        if (res.ok) {
            const form = e.target;
            form.reset();
        } else {
            console.log("User Registeration Failed");
        }

    } catch (error) {
        console.log("Error during registeration", error)
    }

}

  return (
<form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 ">
<h1 className='mb-10 text-2xl font-semibold'>
        Create a To-do Account !
    </h1>
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
    <input onChange={(e)=> setName(e.target.value)} type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Munna Guruji" required />
  </div>

  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input onChange={(e)=> setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
  </div>

  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input onChange={(e)=> setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div className="flex items-start mb-5">
  <label htmlFor="remember" className="ms-2 text-sm font-normal text-gray-900">
        Already have an account <span ><a href="/" className="italic underline">Login</a></span>
  </label> 
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Register</button>
{ error && (

<div class="flex items-center p-4 mb-4 mt-8 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 " role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">{ error }</span> 
  </div>
</div>

) }
</form>
  )
}

export default Register