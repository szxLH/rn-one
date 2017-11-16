import {Dimensions, Platform} from 'react-native'
import {baseUrl, timeout} from '../config'
import axios from 'axios'

// axios.defaults.xsrfHeaderName = "X-CSRFToken"

const BASE_URL = baseUrl[Platform.OS]
export const deviceHeightDp = Dimensions.get('window').height

export const deviceWidthDp = Dimensions.get('window').width

const uiHeightPx = 592

export function px2dp(uiElementPx) {
  return uiElementPx *  deviceHeightDp / uiHeightPx
}

export function httpGet (path, header) {
  return axios.get(`${BASE_URL}${path}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + header.token
      // 'x-csrf-token': Cookie.get('csrfToken')
    },
    timeout
  })
  .then(function (response) {
    return response.data
  })
  // .catch(function (error) {
  //   console.log(error);
  // })
}

export function httpPost (path, body) {
  return axios.post(`${BASE_URL}${path}`, {
    // data: JSON.stringify(body),
    data: body,
    headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
    },
    timeout
  })
  .then(function (response) {
    return response.data
  })
  // .catch(function (error) {
  //   console.log('message===', error.message);
  // })
}
