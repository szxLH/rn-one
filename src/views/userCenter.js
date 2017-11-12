import React from 'react'
import Header from '../components/header'
import {defaultStyles} from '../assets/styles'
import Login from './login'
import {
  View,
  Text
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
    return (
      <Item arrow='horizontal' onClick={this.handleLoginRegister}>
        <Brief>登陆／注册</Brief>
      </Item>
    )
  }

  render () {
    return (
      <View style={defaultStyles.pageContainer}>
        <Header header={this.state.header}/>
        <List>
          {this.renderLoginList() }
        </List>
      </View>
    )
  }
}
UserCenter.propTypes = {
  navigator: React.PropTypes.any
}
export default UserCenter
