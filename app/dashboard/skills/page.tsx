"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Skills from "@/app/components/Skills"
import Fixed from '../components/Fixed'

function skills() {
  const [open,setOpen] = useState(false);
  const openForm = () => {
    setOpen(true)
  }
  const closeForm = () => {
    setOpen(false)
  }
  return (
    <div className='text-white'>
      {open ? <Fixed page="Skill" closeForm={closeForm}/> : null}
      <button className="bg-primary px-4 py-2 text-bgColor" onClick={openForm}>Add Skill</button>
      <Skills mode />
    </div>
  )
}

export default skills