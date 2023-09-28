import React from 'react'
type skill = {
  skill:string,
  grade:number
}
const skillset: skill[] = [
  {
    skill: "Templates",
    grade: 100
  },
  {
    skill: "Social Media Covers",
    grade: 100
  },
  {
    skill: "Publication Designs",
    grade: 100
  },
  {
    skill: "E-book Covers",
    grade: 100
  },
  {
    skill: "Brand Identity Designs",
    grade: 80
  },
  {
    skill: "Flyers & Posters",
    grade: 100
  },
  {
    skill: "Social Media Posts",
    grade: 100
  },
  {
    skill: "Business Cards",
    grade: 100
  },
  {
    skill: "Video Editing",
    grade: 80
  },
  {
    skill: "Youtube Thumbnails",
    grade: 100
  },
  {
    skill: "Labels",
    grade: 100
  },
]
function Skills() {
  return (
    <section className='pt-[8rem]'>
      {/* <div className='flex items-center gap-4'> */}
        {/* <h2 className='font-extrabold text-3xl text-primary'> 02.</h2> */}
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Area of Expertise</h2>
        {/* <div className='w-[7rem] h-[1px] bg-textgray'></div> */}
      {/* </div> */}
      <div className='flex flex-wrap gap-x-3 gap-y-4 mt-8  justify-center items-center'>
        {skillset.map((skill,index)=>{
          return (
            <div className='w-fit bg-primary p-4 rounded-lg'>
              <h4>{skill.skill}</h4>
              <p>{skill.grade}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills