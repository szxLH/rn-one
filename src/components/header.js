import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {defaultStyles} from '../assets/styles'
import px2dp from '../utils/px2dp'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.renderLeft = this.renderLeft.bind(this)
    this.renderCenter = this.renderCenter.bind(this)
    this.renderRight = this.renderRight.bind(this)
  }
 
  renderLeft () {
    const {left} = this.props.header
    return (
      <Text style={defaultStyles.mainColor}>{left && left.option ? left.option.text : ''}</Text>
    )
  }
  renderCenter () {
    const {center} = this.props.header
    switch (center && center.type) {
      case 'switch':
        return (
          center.option.map(op => {
            return <Text>{op.text}</Text>
          })
        )
      default:
        return null
    }
  }
  renderRight () {
    const {right} = this.props.header
    return (
      <Text>{right && right.option ? right.option.text : ''}</Text>
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.left}>{this.renderLeft()}</View>
        <View style={styles.center}>{this.renderCenter()}</View>
        <View style={styles.right}>{this.renderRight()}</View>
      </View>
    )
  }
}

Header.propTypes = {
  header: React.PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: px2dp(12)
  },
  left: {
    flex: 1
  },
  center: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  right: {
    flex: 1
  }
})
