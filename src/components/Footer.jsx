import React from 'react'
import Link from 'next/link'
import Container from './Container'

// assets
import Google from '@/assets/Google'

function Footer() {
  return (
    <div className='bg-[#F7F8FA]'>
    <Container>
    <div className='flex flex-col sm:flex-row justify-between items-center sm:px-6 py-20 mt-32'>
        <Google />
        <Link href="#" className='whitespace-nowrap text-[#C7C7C7]'>Privacy, Terms & Licenses</Link>
    </div>
    </Container>
    </div>
  )
}

export default Footer