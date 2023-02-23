/* newt */
import { createClient } from 'newt-client-js'

/* app */
import { environment as env } from '../../environment'



export default createClient({
  spaceUid: env.newt.spaceUid,
  token: env.newt.apiToken,
  apiType: env.newt.apiType as 'cdn' | 'api',
})
