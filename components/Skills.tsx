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
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-4 mt-12  justify-between items-center '>
        {skillset.map((skill,index)=>{
          return (
            <div className='group h-[7rem] bg-bgColor text-inverse  rounded-lg text-center grow shadow-lg border-2 border-primary py-4 px-2 relative grid items-center' key={index}>
              <h4>{skill.skill}</h4>
              <p>{skill.grade}%</p>
              {/* <div className='absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] w-full px-2'> */}
                {/* <h4>{skill.skill}</h4> */}
                {/* <p>{skill.grade}%</p> */}
              {/* </div> */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary h-0 group-hover:h-full transition-all duration-200">
                {/* <p>{skill.grade}%</p>  */}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills