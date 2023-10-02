import React from 'react'
import Food from '../assets/food.png'
import E_commerce from '../assets/Ecomerce.png'
import Courier from '../assets/courier_2.png'
const Service = () => {
    const set=[
        {
            title:"Food delivery",
            text:' Partnering with restaurants and eateries to provide food delivery services to customers.',
            pic:Food
        },
        {
            title:"Courier delivery",
            text:' Offering fast and reliable courier services for urgent deliveries.from everywhere ',
            pic:E_commerce
        },
        {
            title:"E-commerce delivery",
            text:'Collaborating with online retailers to handle the delivery of their products to customers.',
            pic:Courier
        }
    ]
  return (
    <section id="services" className=" mt-32 ">         
    <h1 className="text-4xl font-semibold flex justify-center mx-auto  text-title_color   mb-4">
     Services
    </h1>
    <p className="text-lg text-center  max-w-lg flex justify-center px-6 mx-auto text-text_color">
    offering a wide range of services to cater to all your needs
    under one virtual roof
    </p>
   
        <div className="flex  w-full  py-12 justify-center mx-auto ">
        <div className="flex  lg:flex-row flex-col lg:gap-24 gap-16 "> 
          {set.map((ser, index) => {
            return (
              <div key={index} className="border-dashed border-2 border-red rounded-full lg:w-[360px] lg:h-[360px] sm:w-[360px] sm:h-[360px] w-[300px] h-[300px]">
                <div className="bg-text mx-8 my-2 lg:w-[290px] lg:h-[290px] sm:w-[290px] sm:h-[290px] w-[230px] h-[230px] rounded-full">
                  <h3 className="text-yellow pt-12 text-lg flex justify-center mx-auto font-semibold">{ser.title}</h3>
                  <p className="text-md max-w-sm font-light  text-title_color px-3 text-center pt-2 justify-center">
                    {ser.text}
                  </p>
                  <img src={ser.pic} className="w-[350px]" alt={ser.title} /> 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Service