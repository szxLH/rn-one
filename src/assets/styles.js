import {px2dp, deviceHeightDp} from '../utils'

export const grayColor = '#b2b0bf'
export const bgColor = '#f3f3f3'
export const blueColor = '#1083e6'

export const defaultStyles = {
  pageContainer: {
    marginTop: px2dp(15),
    paddingBottom: px2dp(50),
    backgroundColor: bgColor,
    height: deviceHeightDp
  },
  text: {
    fontFamily: 'Avenir',
  }
}
