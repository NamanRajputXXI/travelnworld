import React from 'react'
import Herosection from './components/home/Herosection'
import Client from './components/home/Client'
import Footer from './components/global/Footer'
import Navbar from './components/global/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
   <Client/>
   <Footer/>
    </>
   
  )
}

export default App