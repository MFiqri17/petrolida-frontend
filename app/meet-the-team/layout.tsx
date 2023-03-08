import '../globals.css'
import Navbar from '../../components/layout/navbar/navbar'
import localFont from '@next/font/local'
import Footers from '../../components/layout/footer/footers'
import SmoothScrollContainer from '../../components/utils/smooth-scroll'
import { getUserData } from '../../utils/auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userData = await getUserData()
  return (
    <main lang="en">
      <div className="relative">
        <Navbar isTrans={false} userData={userData} />
        {/* <SmoothScrollContainer> */}
        {children}
        <Footers />
        {/* </SmoothScrollContainer> */}
      </div>
    </main>
  )
}
