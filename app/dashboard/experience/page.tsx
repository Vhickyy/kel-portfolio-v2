"use client"
import Experience from '@/app/components/Experience'
import React, { useState } from 'react'
import Fixed from '../components/Fixed';

function page() {
  const [open,setOpen] = useState(false);
  const openForm = () => {
    setOpen(true)
  }
  const closeForm = () => {
    setOpen(false)
  }
  return (
    <div>
      {open ? <Fixed page="Experience" closeForm={closeForm}/> : null}
      <button className="bg-primary px-4 py-2 text-accent rounded-md" onClick={openForm}>Add Experience</button>
      <Experience mode/>
    </div>
  )
}

export default page