import React from 'react'
import Header from '../components/header'
import Hot from './hot'
import {defaultStyles} from '../assets/styles'
import {px2dp} from '../utils'
import {blueColor} from '../assets/styles'
import {deviceWidthDp} from '../utils'
import {login} from '../service/user'
import {
  List,
  Button,
  InputItem,
  WingBlank
} from 'antd-mobile'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
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
      },
      name: '',
      password: '',
      loading: false
    }
  }
  async handleLogin () {
    const {name, password} = this.state
    this.setState({loading: true})
    await login({
      name, password
    })
  }
  render () {
    const {name, password, loading} = this.state
    return (
      <View style={defaultStyles.pageContainer}>
        <Header header={this.state.header}/>
        <List style={{marginTop: 60, marginBottom: 20}}>
          <InputItem
            placeholder="Email/手机号"
            onChange={v => this.setState({name: v})}
            clear
          ></InputItem>
          <InputItem
            placeholder="密码"
            type='password'
            onChange={v => this.setState({password: v})}
            clear
          ></InputItem>
        </List>
        <WingBlank>
          <Button 
            type='primary'
            loading={loading}
            disabled={!name || !password || loading}
            onClick={this.handleLogin} 
          >登录</Button>
        </WingBlank>
        <View style={styles.footer}>
          <Text style={styles.footerText}>注册账号</Text>
          <Text style={{marginHorizontal: 10}}>|</Text>
          <Text style={styles.footerText}>忘记密码</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: px2dp(30),
    width: deviceWidthDp,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    color: blueColor
  }
})
