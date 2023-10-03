import React from 'react'
import youTube from "@/assets/youTube1.jpg";
import Image from 'next/image';
type Videos = {
    name: string;
    descrition: string;
    image: string;
    link: string;
}
export default function Videos() {
  const videos: Videos[] = [
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
  ]
  return (
    <section className='w-full pt-[8rem]'>
      {/* <div className='flex items-center gap-4'> */}
        {/* <h2 className='font-extrabold text-3xl text-primary'> 03.</h2> */}
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Videos</h2>
        {/* <div className='w-[7rem] h-[1px] bg-textgray'></div>
      </div> */}
      {/* </div> */}
      <div className=' grid gap-x-4 gap-y-8 mt-8 sm:grid-cols-2 xl:grid-cols-3'>
        {videos.map((video,index)=>{
          return (
            <div key={index} className='rounded-lg overflow-hidden  text-textColor relative shadow-md'>
              <div className="relative">
                <Image
                alt="youube video"
                src={youTube}
                width={350}
                height={300}
                className='w-full'
                  />
                  {/* <div className="absolute h-4 w-4 -bottom-[1.2] left-0 bg-bgColor rounded-tl-2xl">
                    <div className="absolute h-4 w-4 -bottom-[1.2] left-0 bg-[#fff302] -z-10"></div>
                  </div>
                  <div className="absolute h-4 w-4 -bottom-[1.1] right-0 bg-bgColor rounded-tr-2xl">
                    <div className="absolute h-4 w-4 -bottom-[1.2] left-0 bg-[#fff302] -z-10"></div>
                  </div> */}
              </div>
               <div className='p-8 bg-bgGray flex flex-col gap-4'>
                <h4 className='text-center text-lg md:text-2xl font-bold capitalize'>{video.name}</h4>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis error... nosum mollitia.</p>
                {/* <button className='bg-primary p-2 text-textColor'><a href="#">Icon</a></button> */}
               </div>
            </div>
          )
        })}
      </div>
      <div className="w-full flex justify-center items-center">
        <button className='mx-auto mt-6 text-md sm:text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg text-primary font-medium  hover:transform hover:scale-105 hover:duration-200 '>View More Videos</button>
      </div>
      {/* mt-6 text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg text-primary font-medium  hover:transform hover:scale-105 hover:duration-200  */}
    </section>
  )
}
