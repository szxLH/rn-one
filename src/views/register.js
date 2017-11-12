import React from 'react'
import Header from '../components/header'
import Hot from './hot'
import {defaultStyles} from '../assets/styles'
import {
  View,
  List,
  InputItem
} from 'antd-mobile'

export default class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      header: {
        left: {
          option: {
            text: '首页',
            handle: () => {this.props.navigator.push({
              component: Hot
            })}
          }
        },
        center: '登陆',
        right: null
      }
    }
      
  }  
  render () {
    return (
      <View style={defaultStyles.pageContainer}>
        <Header header={this.state.header}/>
        <List style={{marginTop: 60}}>
          <InputItem
            placeholder="真实姓名或常用昵称"
            clear
          ></InputItem>
          <InputItem
            placeholder="手机号（仅支持大陆手机号）"
            type='phone'
            clear
          ></InputItem>
          <InputItem
            placeholder="密码"
            type='password'
            clear
          ></InputItem>
          <Button type='primary'>注册</Button>
        </List>
      </View>
    )
  }
}