import {httpGet, httpPost} from '../utils'
export function login (user) {
  const url = '/user/login'
  return httpPost(url, user)
}

export function getList (header) {
  const url = '/list'
  return httpGet(url, header)
}

export function patchList () {
  const url = '/list'
  return httpPost(url, {id: 2})
}