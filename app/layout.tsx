import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from 'app/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Delaika ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">


      <body className={inter.className} style={{
        margin: '0',
        padding: '0',
      }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
