import React from 'react'
import Hero from '../components/Hero'
import Commitments from '../components/Commitments'
import ProductTypes from '../components/ProductTypes'
import Banner from '../components/Banner'
import OurHistory from '../components/OurHistory'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Commitments/>
      <ProductTypes/>
      <Banner/>
      <OurHistory/>
      <Contact/>
    </div>
  )
}

export default Home