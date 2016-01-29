import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import account from './modules/account'
import messages from './modules/messages'

export default combineReducers({
  counter,
  account,
  messages,
  router
})
