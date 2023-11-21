import Link from 'next/link'
import React from 'react'
import Skills from "@/app/components/Skills"
import Fixed from '../components/Fixed'

function skills() {
  return (
    <div className='text-white'>
    <Fixed/>
    <Skills mode/>
    </div>
  )
}

export default skills