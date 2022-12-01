import './globals.css'
import localFont from '@next/font/local'
import Navbar from '../components/navbar'
import Footers from '../components/footers'

const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-ExtraBold.woff',
      weight: '700',
    },
    {
      path: '../public/fonts/Gilroy-SemiBold.woff',
      weight: '600',
    },
    {
      path: '../public/fonts/Gilroy-Regular.woff',
      weight: '400',
    },
  ],
  variable: '--font-primary',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={gilroy.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Navbar />
        {children}
        <Footers />
      </body>
    </html>
  )
}
