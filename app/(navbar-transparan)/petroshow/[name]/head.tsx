import DefaultHead from '../../../../components/utils/default-head'
import { petroshowData } from '../../../../data/petroshow'

function getPageTitle(param: string) {
    const data = petroshowData.filter(({ slug }) => slug === param)
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
