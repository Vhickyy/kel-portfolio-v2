import ThemeButton from "../components/ThemeButton";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='w-[90%] max-w-[1120px] mx-auto'>
      <Navbar />
      {children}
      <div className='fixed bottom-8 right-10 md:hidden border-2 border-primary p-3 rounded-[50%] text-primary cursor-pointer'>
        <ThemeButton/>
      </div>
    </div>
  )
}