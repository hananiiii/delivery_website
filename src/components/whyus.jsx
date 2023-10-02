import React from 'react'
import Why from '../assets/why.png'
const whyus = () => {
  return (
    <section id="why_us" className=" mt-32 ">
         <h1 className="text-4xl font-semibold flex justify-center mx-auto  text-title_color   mb-4">
     Why us
    </h1>
    <p className="text-lg text-center  max-w-lg flex justify-center px-6 mx-auto text-text_color">
    The newly launched delivery website offers a user-friendly interface, secure payment options
    </p>
    <div className="container flex flex-wrap  items-center justify-center mx-auto  lg:px-24 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2 my-12  ">
                <img src={Why} className='lg:w-[70%] h-full w-[100%]'/>
                </div>
                <div className="lg:w-1/2    ">
                <div class="grid grid-cols-2 gap-8  pt-8 ">
                 <div class="col-span-2 lg:col-span-1">
                      <div class="flex flex-col h-full p-4 ">
                          <div className="flex flex-row gap-4">
                          <span className="text-red text-3xl"><ion-icon name="home"></ion-icon></span> 
                            <h3 className="font-bold text-[22px] text-title_color">Home delivery</h3>
                           
                          </div>
                          <p className="text-lg lg:text-start text-center font-medium text-text_color  mt-4">
                            Effortlessly receive your desired products 
                             at your doorstep with our reliable home
                            delivery service.</p>
                      </div>
                 </div>
                 <div class="col-span-2 lg:col-span-1  ">
                      <div class="flex flex-col h-full p-4 ">
                          <div className="flex flex-row gap-4">
                          <span className="text-red text-3xl"><ion-icon name="cart"></ion-icon></span>
                            <h3 className="font-bold text-[22px] text-title_color">Easy to order</h3>
                          
                          </div>
                          <p className="text-lg lg:text-start text-center font-medium text-text_color  mt-4">
                            Ordering is a breeze with our user-friendly
                             interface, making it quick and easy to get 
                            exactly what you need</p>
                      </div>
                 </div>
                 <div class="col-span-2 lg:col-span-1  ">
                      <div class="flex flex-col h-full p-4 ">
                          <div className="flex flex-row gap-4">
                          <span className="text-red text-3xl"><ion-icon name="time"></ion-icon></span>
                            <h3 className="font-bold text-[22px] text-title_color">24/4 Services</h3>
                          </div>
                          <p className="text-lg lg:text-start text-center font-medium text-text_color mt-4">Experience the convenience of our 24/7 
                               fast service, ensuring prompt delivery
                                whenever you need it, day or night.</p>
                      </div>
                 </div>
                 <div class="col-span-2 lg:col-span-1 ">
                      <div class="flex flex-col h-full p-4 ">
                          <div className="flex flex-row gap-4">
                            <span className="text-red text-3xl"> <ion-icon name="heart" className="bg-red"></ion-icon></span>
                            <h3 className="font-bold text-[22px] text-title_color">Best Quality</h3>
                          </div>
                          <p className="text-lg lg:text-start text-center font-medium text-text_color  mt-4">Delivering excellence is our top priority,
                                 providing you with the best quality service
                                that exceeds your expectations every time.</p>
                      </div>
                 </div>

           </div>
                </div>

         </div>
    </section>
  )
}

export default whyus