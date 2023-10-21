import Link from 'next/link'
import React from 'react'
import Skills from "@/app/components/Skills"

function skills() {
  return (
    <div className='text-white'>
    {/* <div>skills</div> */}
    {/* <Link href={"./me"}>back</Link> */}
    <Skills mode/>
    </div>
  )
}

export default skills