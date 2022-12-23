import '../globals.css'
import localFont from '@next/font/local'
import Navbar from '../../components/navbar'
const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/Gilroy-ExtraBold.woff',
      weight: '700',
    },
    {
      path: '../../public/fonts/Gilroy-SemiBold.woff',
      weight: '600',
    },
  ],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={gilroy.className}>
      <head />
      <body>
        <Navbar isTrans={false} />
        {children}
      </body>
    </html>
  )
}
