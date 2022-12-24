import DefaultHead from '../../../../components/utils/default-head'
import { competitionData } from '../../../../data/competition'

function getPageTitle(param: string) {
  const data = competitionData.filter(({ slug }) => slug === param)
  if (data[0]) {
    return data[0].name
  }
  return null
}

export default function Head({ params }: { params: { name: string } }) {
  const title = getPageTitle(params.name)

  return (
    <>
      <DefaultHead templateTitle={title || ''} />
    </>
  )
}
