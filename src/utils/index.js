import {Dimensions} from 'react-native'
import {baseUrl} from '../config'

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
  console.log('path========', path)
  console.log('body========', body)
  return new Promise((resolve, reject) => {
    fetch({
      method: 'POST',
      url: `${baseUrl}${path}`,
      type: 'json',
      data: JSON.stringify(body)
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

export function testPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({code: 1})
    }, 1000)
  })
}