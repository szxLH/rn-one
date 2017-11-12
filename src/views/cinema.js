import React from 'react'
import {Tabs} from 'antd-mobile'
import Header from '../components/header'
import {defaultStyles} from '../assets/styles'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const tabs = [
  { title: '区域', index: 0 },
  { title: '特色', index: 1 }
]
class Collection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      header: {
        left: null,
        center: '影院',
        right: {
          option: {
            text: '搜索',
            handle: () => {}
          },
          type: 'text'
        }
      }
    }
      
  }    
  render () {
    console.log('tabs===', tabs)
    return (
      <View style={[styles.container, defaultStyles.pageContainer]}>
        <Header header={this.state.header}/>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          renderTab={tab => <Text>{tab.title}</Text>}
          style={{alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}
        >
          <View style={{alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
            <Text style={{alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>区域</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
            <Text style={{alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>区域</Text>
          </View>
        </Tabs>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  }
})

export default Collection
