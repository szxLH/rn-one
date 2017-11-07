import React, { Component } from 'react';
// import {Provider} from 'react-redux'
import {
  Navigator,
} from 'react-native-deprecated-custom-components';
import Movies from './Movies';

// const RouteMapper = (route, navigator) => {
//   if (route.name === 'movies') {
//     return <Movies navigator={navigator} />;
//   }
// };

export default class App extends Component {
  render() {
    return (
      // {<Provider store={store}>}
        <Navigator
          // Default to movies route
          initialRoute={{component: Movies}}
          // Use FloatFromBottom transition between screens
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          // Pass a route mapper functions
          renderScene={(route, navigator) => {
            return <route.component {...route.args} navigator={navigator} />
          }}
        />
      // </Provider>
    );
  }
}