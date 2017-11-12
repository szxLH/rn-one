import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native'
// import {Button} from 'antd-mobile'
import {defaultStyles} from '../assets/styles'
import Swiper from '../components/swiper'
import Header from '../components/header'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: [],
      header: {}
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
      ],
      header: {
        left: {
          option: {
            text: '首页',
            handle: () => {}
          },
          type: 'text',
          // type: 'navigation',
        },
        center: {
          option: [{
            text: '正在热映',
            handle: () => {}
          }, {
            text: '即将上映',
            handle: () => {}
          }],
          type: 'switch'
        },
        right: {
          option: {
            text: '城市选择',
            handle: () => {}
          },
          type: 'text'
        }
      }
    })  
  }
  render () {
    return (
      <View style={[styles.container, defaultStyles.pageContainer]}>
        <Header header={this.state.header}/>
        <Swiper dataSource={this.state.dataSource}/>
        {/* <Button>fdasf</Button> */}
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
