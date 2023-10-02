import React from 'react'
import Logo from './logo'
import Nav from './nav'
import Button from "./button";
import { Link } from 'react-router-dom';

const header = () => {
 
  return (
    <section className='bg-white flex-wrap px-8 py-6 sticky top-0 z-[20] mx-auto flex   w-full  items-center  justify-between  '>
        <Logo textColor="red"/>
        <Nav/>
    <div className ='lg:block hidden'> 
         <Link to='/Signup'><Button ButtonText="Join us" /> </Link>
        </div>
    </section>
  )
}

export default header