import React from 'react'
import {FaEdit, FaTrash} from "react-icons/fa"
interface exper {
  mode?: boolean
}
const experience = [
  {
    workplace: "SVA CREATIVE | United Kingdom",
    role: "Template Designer",
    year: "2020-2021"
  },
  {
    workplace: "SVA CREATIVE | United Kingdom",
    role: "Template Designer",
    year: "2020-2021"
  },
  {
    workplace: "SVA CREATIVE | United Kingdom",
    role: "Template Designer",
    year: "2020-2021"
  },
  {
    workplace: "SVA CREATIVE | United Kingdom",
    role: "Template Designer",
    year: "2020-2021"
  },
  {
    workplace: "SVA CREATIVE | United Kingdom",
    role: "Template Designer",
    year: "2020-2021"
  },
]
function Experience({mode}:exper) {
  return (
    <section className={mode ? 'py-[2rem]' : 'pt-[8rem]'}>
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Experience</h2>
      <div className='text-textgray flex flex-col sm:flex-row flex-wrap justify-between gap-y-6 mt-12'>
        {experience.map((exp,index)=>{
          return (
            <div className='relative sm:w-[50%]' key={index}>
              <div className='pl-8'>
                <p>{exp.year}</p>
                <p>{exp.workplace}</p>
                <p>{exp.role}</p>
              </div>
              {mode && <div className="flex justify-end gap-3 pr-2 items-center text-primary">
                <FaEdit/>
                <FaTrash/>
              </div>}
              <div className='absolute top-1 left-0 h-4 w-4 rounded-full bg-primary'></div>
              <div className='absolute h-full w-[1px] top-1 left-2 bg-primary'></div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience