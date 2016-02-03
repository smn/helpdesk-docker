import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import account from './modules/account'
import messages from './modules/messages'
import cases from './modules/cases'
import faqs from './modules/faqs'

export default combineReducers({
  account,
  messages,
  cases,
  faqs,
  router
})
