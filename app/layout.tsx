import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from './context/ThemeContext'
import { NavContextProvider } from './context/NavContext'
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
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeContextProvider>
          <NavContextProvider>
            {children}
          </NavContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
