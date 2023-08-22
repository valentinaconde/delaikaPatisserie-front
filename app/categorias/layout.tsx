
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Categories from 'app/components/categories'
import styles from './layout.module.scss'

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

 <div className={styles.container}>
 <Categories />
 <div className={styles.children}>{children}</div>
 </div>
     
  )
}
