import React from 'react'
import Header from '../components/header'
import Hot from './hot'
import {defaultStyles} from '../assets/styles'
import * as UserService from '../service/user'
import {
  List,
  Button,
  InputItem,
  WingBlank
} from 'antd-mobile'
import {
  View,
  Text,
  StyleSheet,
  Alert,
  AsyncStorage
} from 'react-native'

export default class Register extends React.Component {
  constructor (props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this)
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
        center: '注册',
        right: null
      }
    }
  }  

  async handleRegister () {
    const {name, password} = this.state
    this.setState({loading: true})
    try {
      const res = await UserService.register({name, password})
      Alert.alert(res.message)
    } catch (e) {
      Alert.alert(e.message)
    }
    this.setState({loading: false})
  }

  render () {
    const {navigator} = this.props
    const {name, password, password2, loading} = this.state
    return (
      <View style={defaultStyles.pageContainer}>
        <Header header={this.state.header}/>
        <List style={{marginTop: 60, marginBottom: 20}}>
          <InputItem
            placeholder="用户名"
            onChange={v => this.setState({name: v})}
            clear
          ></InputItem>
          <InputItem
            placeholder="密码"
            type='password'
            onChange={v => this.setState({password: v})}
            clear
          ></InputItem>
          <InputItem
            placeholder="重复密码"
            type='password'
            onChange={v => this.setState({password2: v})}
            clear
          ></InputItem>
        </List>
        <WingBlank>
          <Button
            type='primary'
            loading={loading}
            disabled={!name || !password || loading || password !== password2}
            onClick={this.handleRegister} 
          >注册</Button>
        </WingBlank>
      </View>
    )
  }
}