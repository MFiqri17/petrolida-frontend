import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="relative flex h-screen overflow-clip bg-light">
      <div className="z-20 mx-auto my-auto w-1/3 rounded-xl bg-white/25 p-10 backdrop-blur-sm backdrop-filter">
        <h1 className="text-center text-5xl font-semibold">Log in</h1>
        <form action="" className="my-8 space-y-6">
          <input type="text" className="w-full rounded-full bg-gray-200 p-4" />
          <input type="text" className="w-full rounded-full bg-gray-200 p-4" />
        </form>
      </div>
      <div className="absolute -right-24 -bottom-40">
        <Image
          src={'/images/auth-bg.png'}
          width={1047}
          height={1630}
          alt="trophy"
        />
      </div>
    </div>
  )
}
