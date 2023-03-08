import Navbar from '../../components/layout/navbar/navbar'
import { getUserData } from '../../utils/auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userData = await getUserData()
  return (
    <main>
      <div>
        <Navbar isTrans={false} userData={userData} />
        {children}
      </div>
    </main>
  )
}
