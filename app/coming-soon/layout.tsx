import '../globals.css'
import localFont from '@next/font/local'
import Navbar from '../../components/layout/navbar/navbar'
import SmoothScrollContainer from '../../components/utils/smooth-scroll'
import { getUserData } from '../../utils/auth'
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userData = await getUserData()
  return (
    <html className={gilroy.className}>
      <head />
      <body>
        <Navbar isTrans={false} userData={userData} />
        {children}
      </body>
    </html>
  )
}
