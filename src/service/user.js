import {httpGet, httpPost} from '../utils'
export function login (user) {
  const url = '/user/login'
  return httpPost(url, user)
}
