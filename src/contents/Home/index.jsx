import React from 'react'

// Components
import Navbar from '@/components/Navbar'
import Hero from './Hero'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from '@/components/Footer'

function HomeContents() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
    </div>
  )
}

export default HomeContents