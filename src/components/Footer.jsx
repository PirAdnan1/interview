import React from 'react'
import Link from 'next/link'

// assets
import Google from '@/assets/Google'

function Footer() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center bg-[#F7F8FA] sm:px-6 py-20 mt-32'>
        <Google />
        <Link href="#" className='whitespace-nowrap text-[#C7C7C7]'>Privacy, Terms & Licenses</Link>
    </div>
  )
}

export default Footer