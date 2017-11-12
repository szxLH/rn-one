import React from 'react'
import {SegmentedControl,Icon} from 'antd-mobile'
import {blueColor} from '../assets/styles'
import {px2dp} from '../utils'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.renderLeft = this.renderLeft.bind(this)
    this.renderCenter = this.renderCenter.bind(this)
    this.renderRight = this.renderRight.bind(this)
  }
 
  renderLeft () {
    const {left} = this.props.header
    if (left) {
      if (typeof left === 'string') {
        return <Text style={styles.leftText}><Icon type='left' color={blueColor}/>{left}</Text>
      } else {
        return (
          <TouchableOpacity style={styles.leftView} onPress={left.option.handle}>
            <Icon type='left' color={blueColor}/>
            <Text style={styles.leftText}>{left.option.text}</Text>
          </TouchableOpacity>
        )
      }
    }
  }
  renderCenter () {
    const {center} = this.props.header
    if (center) {
      if (typeof center === 'string') {
        return <Text style={styles.centerText}>{center}</Text>
      } else {
        if (center.type === 'switch') {
          return <SegmentedControl values={center.option.map(op => op.text)} style={styles.switch}/>
        }
      }
    }
  }
  renderRight () {
    const {right} = this.props.header
    if (right) {
      if (typeof right === 'string') {
        return <Text style={styles.rightText}>{right}</Text>
      } else {
        return (
          <TouchableOpacity onPress={right.option.handle}>
            <Text style={styles.rightText}>{right.option.text}</Text>
          </TouchableOpacity>
        )
      }
    }
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
    // padding: px2dp(12),
    paddingHorizontal: px2dp(10),
    backgroundColor: '#fff',
    height: px2dp(36),
    alignItems: 'center'
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
    flex: 1,
  },
  switch: {
    width: px2dp(120),
    height: 30,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftText: {
    color: blueColor,
    fontSize: 16
  },
  centerText: {
    color: blueColor,
    fontSize: 16,
  },
  rightText: {
    textAlign: 'right',
    color: blueColor,
    fontSize: 16,
  }
})
