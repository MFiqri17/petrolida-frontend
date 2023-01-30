import '../globals.css'
import localFont from '@next/font/local'
import Sidebar from '../../components/layout/sidebar/sidebar'
import ProfileBar from '../../components/dashboard/profile-bar'
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
      <body className="min-h-screen bg-lightb sm:flex">
        <Sidebar />
        <div className="w-3/4 px-5 sm:grow sm:px-24">
          <section className="hidden w-full justify-end py-14 sm:flex">
            <ProfileBar userData={userData} />
          </section>
          {children}
        </div>
      </body>
    </html>
  )
}
