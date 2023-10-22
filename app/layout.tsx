import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from './context/ThemeContext'
import Link from 'next/link'

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
    // className='overflow-hidden'
    <html lang="en" className='overflow-x-hidden'>
      <body className={`${inter.className}`}>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  )
}
