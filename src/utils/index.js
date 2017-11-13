import {Dimensions} from 'react-native'
import {baseUrl, timeout} from '../config'
import axios from 'axios'
import Cookies from 'js-cookie'

// axios.defaults.xsrfHeaderName = "X-CSRFToken"

export const deviceHeightDp = Dimensions.get('window').height

export const deviceWidthDp = Dimensions.get('window').width

const uiHeightPx = 592

export function px2dp(uiElementPx) {
  return uiElementPx *  deviceHeightDp / uiHeightPx
}


export const Cookie = {
  get (key) {
    return Cookies.get(key)
  },

  set (key, value, expires) {
    return Cookies.set(key, value, { expires: expires || 365 })
  }
}

export function httpGet (path) {
  return axios.get(`${baseUrl}${path}`, {
    headers: {
      'Accept': 'application/json',
      // 'x-csrf-token': Cookie.get('csrfToken')
    },
    timeout
  })
  .then(function (response) {
    console.log('response====', response)
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  })
}

export function httpPost (path, body) {
  console.log('token====', Cookie.get('csrfToken'))
  return axios.post(`${baseUrl}${path}`, {
    data: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
      'x-csrf-token': Cookie.get('csrfToken')
    },
    timeout
  })
  .then(function (response) {
    console.log(response.json());
  })
  .catch(function (error) {
    console.log(error);
  })
}
