import Navbar from '../../components/layout/navbar/navbar'
import LetsJoin from '../../components/layout/footer/letsJoin'
import Footers from '../../components/layout/footer/footers'
import Toast from '../../components/utils/toast'
import { getUserData } from '../../utils/auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userData = await getUserData()
  return (
    <main>
      <div className="bg-light">
        <Navbar isTrans={false} userData={userData} />
        <Toast />
        {children}
        <LetsJoin />
        <Footers />
      </div>
    </main>
  )
}
