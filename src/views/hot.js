import React from 'react'
import {Button} from 'antd-mobile'
import {defaultStyles, grayColor} from '../assets/styles'
import Swiper from '../components/swiper'
import Header from '../components/header'
import { movies, swiperData } from '../data'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ListView
} from 'react-native'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      swiperData: [],
      header: {
        left: null,
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
            text: '广州',
            handle: () => {}
          },
          type: 'text'
        }
      }
    }
  }

  componentDidMount () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.setState({
      swiperData,
      dataSource: ds.cloneWithRows(movies)
    })  
  }

  renderListView (rowData) {
    const renderRow = (rowData) => {
      return (
        <View style={styles.cell}>
          <Image source={{uri: rowData.poster}} style={styles.poster}/>
          <View style={styles.detail}>
            <Text style={{fontSize: 20}}>{rowData.title}</Text>
            <Text style={{marginVertical: 8, color: grayColor}}>导演：{rowData.director}</Text>
            <Text style={{color: grayColor}}>主演：{rowData.actor}</Text>
          </View>
          <View>
            <Button type='ghost' size='small' style={styles.order}>购票</Button>
          </View>
        </View>
      )
    }
    if (this.state.dataSource) {
      return (
        <ListView
          dataSource={this.state.dataSource}
          /* renderRow={(rowData) => renderRow} */
          renderRow={(rowData) => renderRow(rowData)}
        />
      )
    }
    return null
  }

  render () {
    return (
      <View style={[styles.container, defaultStyles.pageContainer]}>
        <Header header={this.state.header}/>
        <Swiper swiperData={this.state.swiperData}/>
        {this.renderListView() }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cell: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderColor: grayColor,
    borderWidth: .5
  },
  detail: {
    flex: 4
  },
  poster: {
    width: 60,
    height: 80,
    marginRight: 15
  },
  order: {
    width: 60,
    height: 30
  }
})
export default Home
