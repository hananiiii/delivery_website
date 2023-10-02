import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Menu ,X} from "lucide-react";
import Button from "./button";

const NavLinks =() =>{
    let Links=[
        {name:"Home",link:"#hero"} ,
        {name:"Services",link:"#services"} ,
        {name:"Why us",link:"#why_us"} ,
        {name:"Costumers",link:"#costumers"} ,
        {name:"App",link:"#app"} ,
 
     ];
    
    return(
    <div className="flex font-font md:flex-row items-center font-meduim text-lg  flex-col lg:gap-12 gap-8  ">
          {Links.map((Links)=>(
       <li key={Links.name} className=" list-none  ">
       <a href={Links.link} className="text-with-gradual-underline hover:text-redd text-title_color font-medium hover:text-yelow duration-500 ">{Links.name}</a>
   </li>
        ))}
        <Link to='/Signup'><div className="lg:hidden"> <Button ButtonText="Join us" /></div> </Link>
       
     </div>
    )
}

const Nav =() =>{
    const [isOpen ,setIsOpen] =useState(false);
    const toggleNavbar =() =>{
        setIsOpen(!isOpen);
        
     
       
    }
    return(
     <>
        <nav className="w-1/2.5 flex justify-end ">
          <div className="hidden w-full md:flex justify-between  ">
            <NavLinks />
          </div>
          <div className="md:hidden  text-title_color ">
            <button   onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu/>}
            </button>
          </div>
        </nav>
        {isOpen && (
            <div className="flex flex-col items-center basis-full  mt-10  md:hidden">
                <NavLinks/>
            </div>
        )}
        
     </>
      
    )
}
export default Nav;