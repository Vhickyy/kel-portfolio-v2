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
    <section className='pt-[8rem]'>
      {/* <div className='flex items-center gap-4'> */}
        {/* <h2 className='font-extrabold text-3xl text-primary'> 03.</h2> */}
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Videos</h2>
        {/* <div className='w-[7rem] h-[1px] bg-textgray'></div>
      </div> */}
      {/* </div> */}
      <div className='grid gap-x-4 gap-y-8 mt-8 sm:grid-cols-2 xl:grid-cols-3'>
        {videos.map((video,index)=>{
          return (
            <div key={index} className='rounded-lg overflow-hidden border border-primary text-textColor relative'>
              <Image
              alt="youube video"
              src={youTube}
              width={350}
              height={300}
              className='w-full'
               />
               <div className=' p-4'>
                <h4>{video.name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis error nostrum mollitia.</p>
                <a href="#">Watch video</a>
               </div>
            </div>
          )
        })}
        <button>More Videos</button>
      </div>
    </section>
  )
}
