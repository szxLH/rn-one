import {createStore, applyMiddleware} from 'redux'
import thunk from 'react-thunk'
import {reducers, initState} from './reducers'

const enhancer = applyMiddleware(thunk)

const store = createStore(reducers, initState, enhancer)

export default store
