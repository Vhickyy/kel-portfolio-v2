"use client"
import React, { useState } from 'react'
import Fixed from '../components/Fixed';
import Project from '@/app/components/Project';

function Page() {
  const [open,setOpen] = useState(false);
  const openForm = () => {
    setOpen(true)
  }
  const closeForm = () => {
    setOpen(false)
  }
  return (
    <div>
      {open ? <Fixed page="Project" closeForm={closeForm}/> : null}
      <button className="bg-primary px-4 py-2 text-accent rounded-md" onClick={openForm}>Add Project</button>
      <Project mode/>
    </div>
  )
}

export default Page