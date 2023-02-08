import Announcement from '../../components/dashboard/announcement'
import {api} from '../../utils/api'
import { serverApiInterceptors } from '../../utils/api-interceptor'

async function getEvents_data() {
  serverApiInterceptors()
  try {
    const res = await api.get('/api/announcement')
    console.log(res.data.data)
    return res.data.data
  } catch (error) {
    return
  }
}

const Test = async () => {
  const events = await getEvents_data()  
  return <><Announcement events={events ?? []} /></>
}

export default Test
