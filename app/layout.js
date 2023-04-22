import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav/Nav'

const font = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
