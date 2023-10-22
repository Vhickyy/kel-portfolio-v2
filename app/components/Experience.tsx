import React from 'react'
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
function Experience() {
  return (
    <section className='pt-[8rem]'>
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Experience</h2>
      <div className='text-textgray'>
        {experience.map((exp,index)=>{
          return (
            <div key={index}>
              <p>{exp.workplace}</p>
              <p>{exp.role}</p>
              <p>{exp.year}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience