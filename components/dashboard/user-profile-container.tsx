import { UserDataTypes } from '../../utils/auth'

export default function UserProfileContainer({
  userData,
}: {
  userData: UserDataTypes
}) {
  return (
    <section>
      <h1 className="mb-10 text-xl font-extrabold">Personal Profile</h1>
      <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-8 rounded-2xl bg-whiteb px-5 py-10 shadow sm:grid-cols-2">
        <div>
          <p className="text-lg font-extrabold text-primary">Name</p>
          <div className="w-full rounded-full bg-light px-5 py-3">
            <p className="text-left text-lg font-medium">
              {userData.data.name}
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg font-extrabold text-primary">Email</p>
          <div className="w-full rounded-full bg-light px-5 py-3">
            <p className="text-left text-lg font-medium">
              {userData.data.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
