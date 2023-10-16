import React from 'react'
import Appp from '../assets/App.png'
const app = () => {
  return (
    <section id="app" className='mt-32'>
        <h1 className="text-4xl font-semibold flex justify-center mx-auto text-title_color mb-4">
         Our App
      </h1>
      <p className="text-lg text-center max-w-lg flex justify-center px-6 mx-auto text-text_color">
      Get closer to us and unlock a world of possibilities <br/>
     by installing our application
      </p>
      <div className="container flex flex-wrap  items-center justify-center mx-auto mt-16 lg:px-24 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
                <img src={Appp} className='w-[55%] h-[55%] flex justify-center mx-auto'/>
                </div>
                <div className="lg:w-1/2   ">
                    <div className='lg:mx-8 flex flex-col gap-10 lg:text-start text-center  '>
                  <h3 className="font-bold text-title_color text-2xl  flex justify-center mx-auto text-center">Install our application</h3>
                  <p className="text-xl text-text_color font-medium flex justify-center mx-auto text-center  lg:block sm:block ">"Get closer to us and unlock a world of possibilities by<br/> installing our application. Discover more about our<br/> services, stay updated with the latest offerings, and<br/> experience the convenience at your fingertips."</p>
                  <div className="flex lg:flex-row sm:flex-row flex-col gap-6 mt-4 cursor-pointer">
                    <button className="text-center items-center py-2 px-5 bg-title_color rounded-lg flex justify-center mx-auto">
                    <span className=" text-2xl text-white px-2 py-2"><ion-icon name="logo-google-playstore"></ion-icon></span>
                     <h3 className="text-lg text-white font-medium "> on PlayStore </h3>
                    </button>
                    <button className="text-center items-center py-2 px-5 bg-title_color rounded-lg  cursor-pointer flex justify-center mx-auto">
                    <span className=" text-2xl text-white px-2 py-2"><ion-icon name="logo-apple"></ion-icon></span>
                     <h3 className="text-lg text-white font-medium  "> on AppStore </h3>
                    </button>
                  </div>
               </div>
                </div>

         </div>

    </section>
  )
}

export default app