import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Products from './Products'



const Home = () => {
  return (
    <div className=' fll scroll-smooth'>
      <div className=''>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default Home