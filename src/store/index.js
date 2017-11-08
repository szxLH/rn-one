import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import React from 'react'
import {reducers, initState} from './reducers'

const enhancer = applyMiddleware(thunk)

const store = createStore(reducers, initState, enhancer)

export default store
