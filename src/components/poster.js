import React, { Component, PropTypes } from 'react'
import {defaultStyles} from '../assets/styles'
import {deviceHeightDp, deviceWidthDp} from '../utils'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const cols = 3, rows = 3

export default class Poster extends Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    openMovie: PropTypes.func.isRequired
  }
  render () {
    const {movie, openMovie} = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={() => {openMovie(movie)}}>
        <View style={styles.imageContainer}>
          <Image source={{uri: movie.poster}} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
        <Text style={styles.genre} numberOfLines={1}>{movie.genre}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (deviceHeightDp - 20 - 20) / rows - 10,
    width: (deviceWidthDp - 10) / cols - 10
  },
  imageContainer: {
    flex: 1
  },
  image: {
    ...StyleSheet.absoluteFillObject
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
  genre: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
})
