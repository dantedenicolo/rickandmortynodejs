import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav/Nav'

const font = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Rick and Morty' />
        <link rel='icon' href='/favicon.ico' />
        <title>Rick and Morty</title>
      </head>
      <body className={font.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
