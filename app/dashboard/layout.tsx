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
        <div className="w-full grow border-2 px-5 sm:w-auto sm:px-24">
          <section className="hidden w-full justify-end py-14 sm:flex">
            <ProfileBar userData={userData} />
          </section>
          {children}
        </div>
      </div>
    </main>
  )
}
