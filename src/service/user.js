import {fetchPost} from '../utils'
export async function login (user) {
  const url = '/user/login'
  await fetchPost(url, user)
}