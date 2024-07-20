import React from 'react'
import Herosection from './components/home/Herosection'
import Client from './components/home/Client'
import Footer from './components/global/Footer'
import Navbar from './components/global/Navbar'
import GrowBuisness from './components/home/GrowBuisness'
const App = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
   <Client/>
   <GrowBuisness/>
   <Footer/>
    </>
   
  )
}

export default App