import React, {Component} from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  AlertIOS
} from 'react-native'

const {width} = Dimensions.get('window')
const duration = 5000

export default class Swiper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 0
    }
    this.renderPagination = this.renderPagination.bind(this)
    this.renderViews = this.renderViews.bind(this)
    this.handleClickBar = this.handleClickBar.bind(this)
    this.startAutoScroll = this.startAutoScroll.bind(this)
  }

  componentDidMount () {
    this.timer = setInterval(this.startAutoScroll, duration)
  }

  startAutoScroll () {
    let index = this.state.current
    index++
    if (index === this.props.dataSource.length) {
      index = 0
    }
    this.setState({current: index})
    this.refs.scroll.scrollTo({x: index * width, animated: true})
  }

  renderViews () {
    const data = this.props.dataSource || []
    return (
      data.map(row => {
        return (
          <View style={styles.view}>
            {<Image source={{uri: row.image}} style={styles.image}/>}
            {row.title && <Text style={styles.text}>{row.title}</Text>}
          </View>
        )
      })
    )
  }

  handleClickBar(index) {
    const oContainer = this.refs.scroll
    oContainer.scrollTo({x: index * width, animated: true})
    this.setState({current: index})
  }

  renderPagination () {
    const data = this.props.dataSource || []
    return (
      <View style={styles.pagination}>
        { 
          data.map((row, i) => 
            <TouchableOpacity
              onPress={this.handleClickBar.bind(this, i)}
            >
              <View 
                style={[styles.paginBar, this.state.current === i ? {backgroundColor: 'orange'} : {}]}
              />
            </TouchableOpacity>
          )
        }
      </View>
    )
  }

  render () {
    return (
      <View>
        <ScrollView
          ref='scroll'
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          onScrollBeginDrag={() => {clearInterval(this.timer)}}
          onScrollEndDrag={() => {this.timer = setInterval(this.startAutoScroll, duration)}}
        >
          {this.renderViews() }
        </ScrollView>
        {this.renderPagination() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 150,
  },
  view: {
    width: width,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  image: {
    ...StyleSheet.absoluteFillObject
  },
  text: {
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.5)',
    width: width,
    bottom: 0,
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  pagination: {
    position: 'absolute',
    bottom: 30,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  paginBar: {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginRight: 5
  }
})

Swiper.propTypes = {
  dataSource: React.PropTypes.array
}