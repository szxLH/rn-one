import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'
import {login} from './store/actions'

class Movies extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log(1)
    setTimeout(() => {
      console.log(2)
    }, 3000)
    this.props.dispatch(login())
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={[{height: 100, backgroundColor: '#f00'}, this.props.isLoading ? null : {display: 'none'}]}></View>
        <Text>1231231</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
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
export default connect(mapStateToProps)(Movies)
