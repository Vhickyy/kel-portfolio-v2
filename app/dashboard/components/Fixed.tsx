import React from 'react'

const Fixed = ({page}:{page:string}) => {
  return (
    <div className='fixed inset-0 bg-bgColorDim z-50 grid place-items-center'>
        <form className='bg-bgColor p-3 w-[80%] md:w-[600px]'>
            <h1>Add {page}</h1>
            <div>
                <label htmlFor={`${page}:`}>{page}</label>
                <input type="text" placeholder={`Enter ${page.toLowerCase()}`} className='rounded w-full'/>
            </div>
            <div>
                <label htmlFor="Proficeiency:"></label>
                <input type="text" placeholder='Proficiency' className='rounded w-full'/>
            </div>
            <div>
                <button>Create</button>
                <button>discard</button>
            </div>
        </form>
    </div>
  )
}

export default Fixed