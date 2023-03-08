import Navbar from '../../components/layout/navbar/navbar'
import LetsJoin from '../../components/layout/footer/letsJoin'
import Footers from '../../components/layout/footer/footers'
import { getUserData } from '../../utils/auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userData = await getUserData()
  return (
    <main lang="en">
      <div>
        <Navbar isTrans={true} userData={userData} />
        {children}
        <LetsJoin />
        <Footers />
      </div>
    </main>
  )
}
