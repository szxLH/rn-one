import TabNavigator from 'react-native-tab-navigator'
import React from 'react'
import {
  Text,
  View
} from 'react-native'

class NavTab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }
  render () {
    return (
      <View>
        <TabNavigator>
          <TabNavigator.Item
            title='Home'
            selected={this.state.selectedTab === 'home'}
            onPress={() => this.setState({ selectedTab: 'home' })}
          />
          <TabNavigator.Item 
            title='About'
            selected={this.state.selectedTab === 'about'}
            onPress={() => this.setState({ selectedTab: 'about' })}
          />
        </TabNavigator>
      </View>
    )
  }
}

export default NavTab
