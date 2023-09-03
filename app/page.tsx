import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Reviews from '@/components/Reviews'
import Videos from '@/components/Videos'
import Image from 'next/image'
import { FaFacebook, FaSun } from 'react-icons/fa'

export default function Home() {
  return (
    <>
    <div className='w-[90%]  lg:flex max-w-[1120px] mx-auto '>
      <aside className='hidden lg:block lg:w-[5%] '>
        <div className='sticky top-[25%] grid gap-4 items-end justify-center'>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <div className=''>
            <div className='w-[1px] h-[20rem] mx-auto bg-primary'></div>
          </div>
        </div>
      </aside>
      <div className='lg:w-[95%]'>
        <nav className='hidden md:flex sticky top-0 w-[95%] lg:w-[90%] mx-auto justify-between items-center pt-8 z-20 text-textgray bg-[whitesmoke]'>
            <div className='p-4 bg-primary rounded-full text-accent'>KO</div>
            <p>Home</p>
            <p>About</p>
            <p>Videos</p>
            <p>Projects</p>
            <p>Contact</p>
            <div className='border-2 border-primary p-3 rounded-md text-primary'>
              <FaSun className="w-6 h-6"/>
            </div>
          </nav>
        <Header/>
        <main className='md:w-[95%] lg:w-[90%] mx-auto'>
         <About/>
         <Videos/>
         <Reviews/>
         <Contact/>
        </main>
      </div>
    </div>
    </>
  )
}
