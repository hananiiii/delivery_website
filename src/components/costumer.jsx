import React from 'react';
import Good from '../assets/good.png';
import Profile from '../assets/profile.jpg';

const Customer = () => {
  return (
    <section id="costumers" className="mt-32">
      <h1 className="text-4xl font-semibold flex justify-center mx-auto text-title_color mb-4">
        Customers
      </h1>
      <p className="text-lg text-center max-w-lg flex justify-center px-6 mx-auto text-text_color">
        Few glowing testimonials from our valued users, sharing their positive experiences and satisfaction with our services
      </p>
      <div className="container flex flex-wrap items-center justify-center mx-auto mt-16 lg:px-24 px-8 md:flex-row mb-8">
        <div className="lg:w-1/2 mb-14 lg:mb-0 lg:order-1 order-2 lg:mt-0 mt-6">
          <div className="lg:mx-8 flex flex-col gap-6 lg:text-start text-center">
            <h1 className="text-title_color text-4xl font-semibold">What people said about us</h1>
            <p className="text-text_color text-md font-medium lg:text-start text-center leading-8">
              I am impressed by the professionalism and friendliness of the delivery team. They went above and beyond to ensure a smooth and hassle-free experience.
            </p>
            <div className="flex lg:justify-start lg:mx-0 justify-center mx-auto">
              <div className="flex flex-row gap-4 mt-3">
                <img src={Profile} className="w-12 h-12 rounded-full" alt="Profile" />
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl text-title_color font-medium">Emma Smith</h4>
                  <p className="text-text_color text-lg font-medium">Regular customer</p>
                  <div className="flex flex-row gap-2">
                    <span className="text-3xl text-yellow"><ion-icon name="star"></ion-icon></span>
                    <span className="text-3xl text-yellow"><ion-icon name="star"></ion-icon></span>
                    <span className="text-3xl text-yellow"><ion-icon name="star"></ion-icon></span>
                    <span className="text-3xl text-yellow"><ion-icon name="star"></ion-icon></span>
                    <span className="text-3xl text-yellow stroke-current bg-transparent"><ion-icon name="star"></ion-icon></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 order-1">
          <img src={Good} className="w-full h-full" alt="Good" />
        </div>
      </div>
    </section>
  );
}

export default Customer;
