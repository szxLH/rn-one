import {Dimensions} from 'react-native'
import {baseUrl, timeout} from '../config'
import axios from 'axios'

// axios.defaults.xsrfHeaderName = "X-CSRFToken"

export const deviceHeightDp = Dimensions.get('window').height

export const deviceWidthDp = Dimensions.get('window').width

const uiHeightPx = 592

export function px2dp(uiElementPx) {
  return uiElementPx *  deviceHeightDp / uiHeightPx
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
  return axios.post(`${baseUrl}${path}`, {
    data: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
      // 'x-csrf-token': Cookie.get('csrfToken')
    },
    timeout
  })
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  })
}
