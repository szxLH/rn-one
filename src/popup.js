import React, {Component, PropTypes} from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  TouchableWithoutFeedback
} from 'react-native'

const {width, height} = Dimensions.get('window')

export default class Popup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visable: false,
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      position: new Animated.Value(this.props.isOpen ? 0 : height)
    })
    if (!nextProps.isOpen && this.props.isOpen) {
      // 关闭
      this.close()
    } else if (nextProps.isOpen && !this.props.isOpen) {
      this.open()
    }
  }

  open () {
    this.setState({visable: true}, () => {
      Animated.timing(this.state.position, {
        toValue: 0
      }).start()
    })
  }

  close () {
    Animated.timing(this.state.position, {
      toValue: height,
      duration: 2000
    }).start(() => {
      this.setState({visable: false})
    })
  }

  render () {
    debugger
    if (!this.props.isOpen) {
      return null
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.props.closeMovie}>
          <Animated.View style={styles.backdrop}/>
        </TouchableWithoutFeedback>
        <Animated.View
          style={[styles.modal, {
            transform: [{ translateY: this.state.position }]
          }]}
        >
          <Text>popup</Text>
        </Animated.View>
      </View>
    )
  }
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeMovie: PropTypes.func.isRequired,
    movie: PropTypes.obj.isRequired
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    backgroundColor: 'black',
    opacity: 0.5,
  },
  modal: {
    height: height / 2,
    backgroundColor: '#fff'
  }
})
