import { competitionData } from '../../../../data/competition'
import { notFound } from 'next/navigation'

function getPageTitle(param: string) {
  const data = competitionData.filter(({ slug }) => slug === param)
  if (data[0]) {
    return data[0].name
  }
  return null
}

export default function Head({ params }: { params: { name: string } }) {
  const title = getPageTitle(params.name)

  // if (!title) {
  //   notFound()
  // }

  const fullTitle = title + ' - Petrolida 2023'
  return (
    <>
      <title>{fullTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
