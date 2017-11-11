import React, {Component} from 'react'
import {connect} from 'react-redux'
import TabNavigator from 'react-native-tab-navigator'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform
} from 'react-native'
// import {login} from '../store/actions'
import Home from './home'
import Discovery from './discovery'
import Collection from './collection'
import More from './more'
import { navConfigs } from '../config'
import px2dp from '../utils/px2dp'

class Main extends Component {
  constructor (props) {
    super(props)
    console.log('Home===', Home)
    this.state = {
      selected: 'home'
    }
  }

  componentDidMount () {
  }

  renderNav (nav) {
    const renderNavTab = (com) => {
      switch (nav.component) {
        case 'Home':
          return <Home />
        case 'Discovery':
          return <Discovery />
        case 'Collection':
          return <Collection />
        case 'More':
          return <More />
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
  // container: {
  //   paddingTop: 20,
  //   flex: 1,
  // },
  tabBarStyle: {
    height: px2dp(45),
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? px2dp(6) : px2dp(3)
  },
  spaceBarStyle: {
    height: px2dp(50),
    backgroundColor: 'red'
  }
  // scrollContainer: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap'
  // }
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
