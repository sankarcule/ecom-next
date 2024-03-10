import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import { ClerkProvider } from '@clerk/nextjs'
import { ReactQueryClientProvider } from './components/ReactQueryClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryClientProvider>
      <ClerkProvider>
          <html lang="en">
            <body className={inter.className}>
          
                <Nav />
                <div className='container m-10 mt-[150px]'>
                  {children}
                </div>

            </body>
          </html>
      </ClerkProvider>
    </ReactQueryClientProvider>

  )
}
