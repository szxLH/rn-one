import React, {Component} from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'
import { movies } from './data'
import Poster from './poster'
import Popup from './popup'

export default class Movies extends Component {
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
      <View style={styles.container}>
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
    paddingTop: 20
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})