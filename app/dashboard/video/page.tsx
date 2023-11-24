"use client"
import React, { useState } from 'react'
import Videos from "@/app/components/Videos"
import Fixed from '../components/Fixed';

function Video() {
  const [open,setOpen] = useState(false);
  const openForm = () => {
    setOpen(true)
  }
  const closeForm = () => {
    setOpen(false)
  }
  return (
    <div className='text-white'>
      {open ? <Fixed page="Video" closeForm={closeForm}/> : null}
      <button className="bg-primary px-4 py-2 text-accent rounded-md" onClick={openForm}>Add Video</button>
    <Videos mode/>
    </div>
  )
}

export default Video