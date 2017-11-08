import React, { Component } from 'react';
import {
  Text, View
} from 'react-native'
import {Provider} from 'react-redux'
import {
  Navigator
} from 'react-native-deprecated-custom-components';
import Home from './home';
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{component: Home}}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          renderScene={(route, navigator) => {
            return <route.component {...route.args} navigator={navigator} />
          }}
        />
      </Provider>
    );
  }
}

// import React, { Component } from 'react';
// import {View, Text} from 'react-native'

// export default class App extends Component {
//   render () {
//     return (
//       <View><Text>dfasfa</Text></View>
//     )
//   }
// }
