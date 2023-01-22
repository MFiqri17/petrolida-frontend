import '../globals.css'
import localFont from '@next/font/local'
import SmoothScrollContainer from '../../components/utils/smooth-scroll'

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
    <html lang="en" className={gilroy.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SmoothScrollContainer>{children}</SmoothScrollContainer>
      </body>
    </html>
  )
}
