import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Fixed = ({page}:{page:string}) => {
  return (
    <div className='fixed inset-0 bg-bgColorDim z-50 grid place-items-center'>
        <form className='bg-bgColor p-[1rem] w-[85%] md:w-[500px] grid gap-[1rem]'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-center text-2xl'>Add {page}</h1>
                <FaTimes className="text-primary cursor-pointer"/>
            </div>
            <div>
                <label htmlFor={`${page}:`}>{page}</label>
                <input type="text" placeholder={`Enter ${page.toLowerCase()}`} className='rounded w-full p-2 border border-bgColor'/>
            </div>
            {page === "Skill" && <div>
                <label htmlFor="Proficeiency:">Proficiency</label>
                <input type="text" placeholder='Proficiency' className='rounded w-full p-2 border border-bgColor'/>
            </div>}
            <div>
                <button className='bg-primary text-bgColor px-4 py-2 rounded'>Create</button>
                <button className='bg-primary text-bgColor px-4 py-2 rounded'>Discard</button>
            </div>
        </form>
    </div>
  )
}

export default Fixed