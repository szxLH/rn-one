import React, {Component} from 'react'
import {connect} from 'react-redux'
import TabNavigator from 'react-native-tab-navigator'
// import {login} from '../store/actions'
import Hot from './hot'
import Discovery from './discovery'
import Cinema from './cinema'
import UserCenter from './userCenter'
import { navConfigs } from '../data'
import {px2dp} from '../utils'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform
} from 'react-native'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 'userCenter'
    }
  }

  renderNav (nav) {
    const {navigator} = this.props
    const renderNavTab = (com) => {
      switch (nav.component) {
        case 'Hot':
          return <Hot navigator={navigator}/>
        case 'Discovery':
          return <Discovery navigator={navigator}/>
        case 'Cinema':
          return <Cinema navigator={navigator}/>
        case 'UserCenter':
          return <UserCenter navigator={navigator}/>
      }
    }
    return (
      <TabNavigator.Item
        key={nav.id}
        title={nav.name}
        selected={this.state.selected === nav.id}
        onPress={() => {this.setState({selected: nav.id})}}
      >
        {renderNavTab(nav.component) }
      </TabNavigator.Item>
    )
  }

  render () {
    
    return (
      <TabNavigator
        hidesTabTouch={true}
        tabBarStyle={styles.tabBarStyle}
        sceneStyle={{
          paddingTop: 10,
          paddingBottom: 10
      }}>
        {navConfigs.map(nav => this.renderNav(nav))}
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: px2dp(45),
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? px2dp(6) : px2dp(3)
  },
  spaceBarStyle: {
    height: px2dp(50),
    backgroundColor: 'red'
  }
})

const mapStateToProps = (state, xxx) => {
  return {
    isLoading: state.loginPage.loading,
    userName: state.homePage.userInfo && state.homePage.userInfo.name || null,
    loginErr: state.loginPage.error || null
  }
}

// const mapDispatchToProps = {
//   login
// }
export default connect(mapStateToProps)(Main)
