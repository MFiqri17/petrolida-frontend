import ComingSoon from './coming-soon/page'
import Contact from '../../components/contact'
import Speakers from '../../components/speakers'


export default function Home() {
  return (
    <>
      <ComingSoon />
      <Speakers />
      <Contact type={'landing'} />
    </>
  )
}
