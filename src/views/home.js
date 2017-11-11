import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native'
import {defaultStyles} from '../assets/styles'
import Swiper from '../components/swiper'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: []
    }
  }
  componentDidMount () {
    this.setState({
      dataSource: [
        {
          image: 'anav',
          title: '美女1'
        },
        {
          image: 'bnav',
          title: '美女2'
        },
        {
          image: 'cnav',
          title: '美女3'
        },
        {
          image: 'dnav',
          title: '美女4'
        }
      ]
    })  
  }
  render () {
    return (
      <View style={[styles.container, defaultStyles.pageContainer]}>
        <Swiper dataSource={this.state.dataSource}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    // paddingBottom: px2dp(50)
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
export default Home
