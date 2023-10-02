import React, { useState } from 'react'
import Header from '../components/Header'
import Order from '../assets/order.png'
const signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("First name:", firstName);
      console.log("Last name:", lastName);
      console.log("Email:", email);
      console.log("Password:", password);
  
      setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setMessage("");
  };
  return (
    <section>
        <Header/>
        <div className="container flex flex-wrap  items-center justify-center mx-auto mt-8 lg:px-24 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
               <div >
                <h4 className="font-semibold flex mx-auto justify-center text-4xl text-title_color mb-4 ">Order now</h4>
        <form onSubmit={handleSubmit} className="flex justify-center mx-auto mt-8 flex-col gap-4 lg:w-[500px]  sm:w-[500px] w-[350px] ">
                <input 
                placeholder="Email"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="w-full  py-4 px-4  bg-transparent border border-title_color text-base font-light  rounded-sm"/>
               <input 
                placeholder="Phone Number"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="w-full  py-4 px-4 bg-transparent border border-title_color   text-base font-light  rounded-sm"/>
               
            <input 
            placeholder="Adress"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full   bg-transparent border border-title_color rounded-sm text-base font-light   px-4 py-4"/>
              <label>
                Message
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-[170px] py-4 px-4 bg-transparent border border-title_color text-base font-light rounded-sm"
                />
              </label>
            <button type="submit" className="w-full  bg-red  text-title_color  font-semibold px-4 py-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer">
              Order</button>
         </form>
         
        
               </div>
                </div>
                <div className="lg:w-1/2   ">
                <img src={Order} className=' mx-24  w-[70%] h-full lg:block hidden'/>

              
                </div>

         </div>
    </section>
  )
}

export default signup