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
    </div>
  )
}