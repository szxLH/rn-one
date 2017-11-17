import React from 'react'
import Header from '../components/header'
import {defaultStyles} from '../assets/styles'
import Login from './login'
import Register from './register'
import {px2dp} from '../utils'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import {
  List
} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

class UserCenter extends React.Component {
  constructor (props) {
    super(props)
    this.handleLoginRegister = this.handleLoginRegister.bind(this)
    this.renderLoginList = this.renderLoginList.bind(this)
    this.state = {
      header: {
        left: null,
        center: '我的',
        right: null
      }
    }
  }

  handleLoginRegister () {
    const {navigator} = this.props
    navigator.push({
      component: Login
    })
  }

  renderLoginList () {
    const image = <Image source={require('../assets/img/avtor.png')} style={styles.avtor}/>
    return (
      <Item arrow='horizontal' thumb={image} style={styles.item} onClick={this.handleLoginRegister}>
        <Text>登陆／注册</Text>
      </Item>
    )
  }

  renderLatest () {

  }

  render () {
    return (
      <View style={defaultStyles.pageContainer}>
        <Header header={this.state.header}/>
        <List>
          {this.renderLoginList() }
          {this.renderLatest() }

        </List>
      </View>
    )
  }
}

UserCenter.propTypes = {
  navigator: React.PropTypes.any
}

const styles = StyleSheet.create({
  // login: {
  //   flexDirection: 'row',
  //   justifyContent: 'center'
  // },
  item: {
    paddingVertical: px2dp(5)
  },
  avtor: {
    width: px2dp(32),
    height: px2dp(32),
    borderRadius: px2dp(16),
    marginRight: px2dp(20)
  }
})

export default UserCenter
