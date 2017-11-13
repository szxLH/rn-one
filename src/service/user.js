import {httpGet, httpPost} from '../utils'
export async function login (user) {
  const url = '/user/login'
  const res = await httpPost(url, user)
  console.log('res===', res)
}
