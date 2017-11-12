import {Dimensions} from 'react-native'
import {baseUrl, timeout} from '../config'
import axios from 'axios'
export const deviceHeightDp = Dimensions.get('window').height

export const deviceWidthDp = Dimensions.get('window').width

const uiHeightPx = 592

export function px2dp(uiElementPx) {
  return uiElementPx *  deviceHeightDp / uiHeightPx
}

export function fetchGet (path) {
  return new Promise((resolve, reject) => {
    fetch({
      method: 'GET',
      url: `${baseUrl}${path}`
    }, (response) => {
      if (response.status == 200) {
        resolve(response.data)
      }
      else {
        reject(response)
      }
    }, () => {})
  })
}

export function fetchPost (path, body) {
  return axios.post({
    url: path,
    baseURL: baseUrl,
    data: body,
    headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    },
    timeout
  }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function testPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({code: 1})
    }, 1000)
  })
}