import React from 'react'
import Header from '../components/Header'
import Hero from '../components/hero'
import Service from '../components/Service'
import Why from '../components/whyus'
import Costumers from '../components/costumer'
import App from '../components/app'
import Footer from '../components/footer'
const Home = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <Service/>
   <Why/>
   <Costumers/>
   <App/>
   <Footer/>
   </>
  )
}

export default Home