import React, { useState } from 'react'
import Header from '../components/Header'
import Join from '../assets/join.png'
const signup = () => {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit =async (e) =>{
        e.preventDefault();
        console.log("First name :" , firstName);
        console.log("Last name :" , lastName);
        console.log("Email :" , email);
        console.log("Password  :" , password);

        setFirstName("");
        setLastName("")
        setEmail("")
        setPassword("")
    };
  return (
    <section>
        <Header/>
        <div className="container flex flex-wrap  items-center justify-center mx-auto mt-16 lg:px-24 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
                <img src={Join} className='w-[70%] h-full lg:block hidden'/>
                </div>
                <div className="lg:w-1/2   ">
                <div className=" py-12">
                <h4 className="font-semibold flex mx-auto justify-center text-4xl text-title_color mb-4 ">Join us</h4>
        <form onSubmit={handleSubmit} className="flex justify-center mx-auto mt-8 flex-col gap-8 lg:w-[500px]  sm:w-[500px] w-[350px] ">
            <div className=" w-full flex flex-row gap-6">
                <input 
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="w-1/2  py-4 px-4  bg-transparent border border-title_color text-base font-light  rounded-sm"/>
               <input 
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="w-1/2  py-4 px-4 bg-transparent border border-title_color   text-base font-light  rounded-sm"/>
               
            </div>
            <input 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full   bg-transparent border border-title_color rounded-sm text-base font-light   px-4 py-4"/>
            <input 
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full   bg-transparent border border-title_color rounded-sm text-base font-light   px-4 py-4"/>
           
            <button type="submit" className="w-full bg-red  text-title_color  font-semibold px-4 py-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer">
              Join</button>
         </form>
         
         <span class="flex mt-10 justify-center  ">
            <a class="text-title_color  hover:text-text_color">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-title_color hover:text-text_color">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-title_color hover:text-text_color">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-title_color hover:text-text_color">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
         </div>
                </div>

         </div>
    </section>
  )
}

export default signup