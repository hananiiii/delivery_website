import React from "react";
import Heroo from '../assets/hero.png'
import { Link } from "react-router-dom";
import Button from "./button";
const Hero =() =>{
    return (
        <section id="hero" className="lg:my-20 sm:my-12 my-20 md:px-24">
           <div className="container font-font flex flex-wrap  items-center justify-center mx-auto  md:flex-row">
               <div className="mb-14 lg:mb-0 lg:w-1/2 ">
                  <h1 className="max-w-2xl lg:leading-tight  leading-[50px]  text-title_color font-semibold font-sans text-center lg:text-5xl text-3xl sm:text-5xl lg:text-left sm:leading-tight mb-5">
                  Indulge in ultimate convenience with our <span className="text-yellow font-semibold font-sans text-center sm:text-5xl  lg:text-5xl  text-3xl lg:text-left sm:leading-tight ">Delivery website –</span> the perfect solution for those seeking to save<span className="text-yellow font-semibold font-sans text-center sm:text-5xl  lg:text-5xl  text-3xl"> Time</span> and <span className="text-yellow font-semibold font-sans text-center sm:text-5xl  lg:text-5xl  text-3xl ">Energie</span>
                  </h1>
                 
                  <div className="flex justify-center text-center gap-8 lg:mt-12 sm:mt-12 mt-8 lg:justify-start">
                     <Link to="/Order">
                        <Button ButtonText="Order now" />
                     </Link>
                     <Link to="/About">
                     <button type="button" className="   px-5 py-2 text-center rounded-sm hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer ">
                       <a className=" text-lg font-medium text-red underline ">Learn more</a>
                        </button>
                     </Link>
                  </div>
                  <div className=" lg:mt-12 sm:mt-12 mt-8 md:gap-16 gap-6 text-text_color  flex lg:justify-start justify-center mx-auto lg:flex-row sm:flex-row flex-col items-center ">
              
              <h4 className=" text-2xl  font-semibold text_text_color  underline">Call us:</h4>
             <div className="flex lg:flex-row sm:flex-row flex-col  gap-8">
             <div className="flex flex-row gap-2 mt-2 items-center ">
                 <span className="text-text_color  text-3xl "> <ion-icon name="call" ></ion-icon></span>
                 <h4 className="font-semibold text-2xl mb-2">0758240063</h4>
             </div>
             <div className="flex flex-row gap-2 mt-2 items-center ">
                  <span className="text-text_color  text-3xl"> <ion-icon name="call" ></ion-icon></span>
                  <h4 className="font-semibold text-2xl mb-2">0587962430</h4>
             </div>
             </div>
             
         </div>
               </div>
               <div className="lg:w-1/2">
                  <img className="flex justify-center mx-auto w-[100%] lg:pl-32  rounded-lg" src={Heroo} alt=""/>
               </div>

           </div>
        </section>
    )
}
export default Hero;