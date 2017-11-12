import React, {Component} from 'react'
import {px2dp} from '../utils'
import { movies } from '../data'
import {defaultStyles} from '../assets/styles'
import Poster from '../components/poster'
import Popup from '../components/popup'
import {
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'

class Discovery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      movie: null
    }
    this.openMovie = this.openMovie.bind(this)
    this.closeMovie = this.closeMovie.bind(this)
  }
  openMovie (movie) {
    this.setState({isOpen: true, movie})
  }
  closeMovie () {
    this.setState({isOpen: false})
  }
  render () {
    return (
      <View style={[styles.container, defaultStyles.pageContainer]}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {
            movies.map((mov, index) => {
              return <Poster
                key={index}
                movie={mov}
                openMovie={this.openMovie}
              />
            })
          }
        </ScrollView>
        <Popup 
          movie={this.state.movie}
          isOpen={this.state.isOpen} 
          closeMovie={this.closeMovie}
        />
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

export default Discovery
