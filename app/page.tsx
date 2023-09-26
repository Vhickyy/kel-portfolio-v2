import About from '@/components/About'
import Contact from '@/components/Contact'
import DesktopNav from '@/components/DesktopNav'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Reviews from '@/components/Reviews'
import Videos from '@/components/Videos'
import { FaFacebook, FaSun } from 'react-icons/fa'

export default function Home() {
  

  return (
    <>
    <div className='w-[90%] lg:flex max-w-[1120px] mx-auto'>
      <aside className='hidden lg:block lg:w-[5%] '>
        <div className='sticky top-[25%] grid gap-4 items-end justify-center text-textColor'>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <div className=''>
            <div className='w-[1px] h-[20rem] mx-auto bg-primary'></div>
          </div>
        </div>
      </aside>
      <div className='lg:w-[95%]'>
        <DesktopNav/>
        <Header/>
        <main className='w-[95%] md:w-[95%] lg:w-[90%] mx-auto'>
         <About/>
         <Experience/>
         <Videos/>
         <Reviews/>
         <Contact/>
        </main>
      </div>
    </div>
    </>
  )
}
