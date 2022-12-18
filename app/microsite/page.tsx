import Image from 'next/image';

export default function MicrositePage() {
  return (
    <div className="relative flex items-center justify-center overflow-clip bg-light">
      <div className="z-20 my-40 w-1/3 rounded-xl border-2 bg-white/25 p-10 backdrop-blur-sm backdrop-filter">
        <h1 className="text-center text-5xl font-semibold">Log in</h1>

        <div className="flex justify-center gap-x-1">
          <p>Dont have an account?</p>
          <a
            href=""
            className="font-semibold text-secondary hover:text-primary"
          >
            Sign Up
          </a>
        </div>
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
};
