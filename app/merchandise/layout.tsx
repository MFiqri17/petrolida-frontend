import '../globals.css'
import Navbar from '../../components/layout/navbar/navbar'
import localFont from '@next/font/local'
import Footers from '../../components/layout/footer/footers'
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
    <html lang="en" className={gilroy.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar isTrans={true} userData={userData} />
        <SmoothScrollContainer>
          {children}
          <Footers />
        </SmoothScrollContainer>
      </body>
    </html>
  )
}
