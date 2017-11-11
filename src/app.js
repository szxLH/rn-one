import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {
  Text, View
} from 'react-native'
import {
  Navigator
} from 'react-native-deprecated-custom-components';
import Main from './views';
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{component: Main}}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          renderScene={(route, navigator) => {
            return <route.component {...route.args} navigator={navigator} />
          }}
        />
      </Provider>
    );
  }
}
