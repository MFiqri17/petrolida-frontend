import Sidebar from '../../components/layout/sidebar/sidebar'
import ProfileBar from '../../components/dashboard/profile-bar'
import { getUserData } from '../../utils/auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userData = await getUserData()
  return (
    <main>
      <div className="min-h-screen bg-lightb sm:flex">
        <Sidebar />
        <div className="w-full px-5 sm:w-[86%] sm:px-24">
          <section className="hidden w-full justify-end py-14 sm:flex">
            <ProfileBar userData={userData} />
          </section>
          {children}
        </div>
      </div>
    </main>
  )
}
