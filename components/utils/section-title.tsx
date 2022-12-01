export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="pb-8 text-center text-6xl font-extrabold">
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {title}
      </span>
    </div>
  )
}
