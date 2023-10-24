import About from '@/app/components/About'
import Contact from '@/app/components/Contact'
import DesktopNav from '@/app/components/DesktopNav'
import Experience from '@/app/components/Experience'
import Header from '@/app/components/Header'
import Reviews from '@/app/components/Reviews'
import Skills from '@/app/components/Skills'
import Videos from '@/app/components/Videos'
import { FaFacebook, FaSun } from 'react-icons/fa';
import ThemeButton from './components/ThemeButton'
// import { ThemeContextProvider } from './context/ThemeContext'

export default function Home() {

  return (
    // <ThemeContextProvider>
    <div className='w-[90%] lg:flex max-w-[1120px] mx-auto'>
      <aside className='hidden lg:block lg:w-[5%]'>
          <div className='sticky top-[25%] grid gap-4 items-end justify-center text-textColor'>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <div className='w-[1px] h-[20rem] mx-auto bg-primary'></div>
          </div>
      </aside>
      <div className='lg:w-[95%]'>
        <DesktopNav/>
        <Header/>
        <main className='w-[95%] md:w-[95%] lg:w-[90%] mx-auto'>
         <About/>
         <Skills/>
         <Experience/>
         <Videos/>
         <Reviews/>
         <Contact/>
        </main>
      </div>
      <div className='fixed bottom-8 right-10 md:hidden border-2 border-primary p-3 rounded-[50%] text-primary cursor-pointer'>
        <ThemeButton/>
      </div>
    </div>
    // </ThemeContextProvider>
  )
}
