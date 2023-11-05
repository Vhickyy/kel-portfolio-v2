"use client"
import Image from 'next/image'
import React from 'react'
import Img from "../../assets/pro2.jpg";
import Img2 from "../../assets/pro3.jpeg";
// import {motion} from "framer-motion";
// import {useInView} from "react-intersection-observer";
// import useNavContext from '../context/NavContext';
const projects = [
    {
        name: "magazine"
    },
    {
        name: "flyer"
    },
    {
        name: "book cover"
    },
    {
        name: "event"
    },
]

function Project() {
//   const {changeActive} = useNavContext();
//   const {ref,inView} = useInView({threshold:0.6});
//   useEffect(()=>{
//     if(inView){
//       changeActive("project")
//     }
//   },[inView])
  return (
    <section className='pt-[3rem] pb-[5rem]' id="project" >
      {/* <div className='flex items-center justify-center'> */}
        {/* <h2 className='font-extrabold text-3xl text-primary'> 01.</h2> */}
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Projects</h2>
      {/* </div> */}
      <div className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((pro,index)=>{
            return (
                <div key={index} className="rounded h-[22rem]  overflow-hidden bg-slate-900">
                    {index % 2 == 0 ? <Image src={Img} alt="project" className='h-[20rem] w-full '/> : <Image src={Img2} alt="project" className='h-[20rem] w-full'/> }
                    <p className="pl-2 pt-[0.3rem]">{pro.name}</p>
                </div>
            )
        })}
      </div>
      
    </section>
  )
}

export default Project