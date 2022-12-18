import { twMerge } from 'tailwind-merge'

export default function SectionTitle({
  title,
  className = '',
  bgClassName = '',
}: {
  title?: any
  className?: string
  bgClassName?: string
}) {
  return (
    <div
      className={twMerge(`pb-5 text-center text-6xl font-extrabold`, className)}
    >
      <span
        className={twMerge(
          `bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`,
          bgClassName,
        )}
      >
        {title}
      </span>
    </div>
  )
}
