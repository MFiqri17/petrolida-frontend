import { twMerge } from 'tailwind-merge'

export default function SectionTitle({
  title,
  className = '',
}: {
  title: string
  className?: string
}) {
  return (
    <div
      className={twMerge(
        `pb-5 text-center text-6xl font-extrabold ${className}`,
      )}
    >
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {title}
      </span>
    </div>
  )
}
