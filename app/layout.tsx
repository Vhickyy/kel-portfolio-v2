import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from './context/ThemeContext'
import { NavContextProvider } from './context/NavContext'
import Link from 'next/link'
import SessionProvider from '@/app/context/sessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kelechi Austin Okorie',
  description: 'Kelechi Austin Okorie, a canva and graphic designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} overflow-x-hidden bg-bgColor`}>
        <ThemeContextProvider>
          <NavContextProvider>
            <SessionProvider>
             {children}
            </SessionProvider>
          </NavContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
