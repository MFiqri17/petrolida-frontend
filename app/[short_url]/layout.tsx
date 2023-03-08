export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main lang="en">
      <div>{children}</div>
    </main>
  )
}
