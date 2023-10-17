import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='text-white'>
    <div>page</div>
    <Link href={"."}>back</Link>
    </div>
  )
}

export default page