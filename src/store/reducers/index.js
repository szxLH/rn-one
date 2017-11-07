import {combineReducers} from 'redux'
import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_LOADING} from '../actions'

export const initState = {
  homePage: {
    userInfo: null
  },
  loginPage: {
    loading: false,
    error: null
  }
}

export const reducers = combineReducers({
  homePage: function (state = {}, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {...state, userInfo: action.payload}
      default:
        return state
    }
  },
  loginPage: function (state = {}, action) {
    switch (action.type) {
      case LOGIN_FAILURE:
        return {...state, error: action.payload}
      case LOGIN_LOADING:
        return {...state, loading: action.payload}
      case LOGIN_SUCCESS:
        return {...state, error: null}
      default:
        return state
    }
  }
})
