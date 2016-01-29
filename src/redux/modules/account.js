import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'loggedIn': false,
  'blocked': false,
  'forgottonstage': 0
}

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const FAILLOGIN = 'FAILLOGIN'
export const FORGOTTON = 'FORGOTTON'

// ------------------------------------
// Actions
// ------------------------------------
export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)
export const faillogin = createAction(FAILLOGIN)
export const forgotton = createAction(FORGOTTON)

export const actions = {
  login, logout, faillogin, forgotton
}

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({
  LOGIN: (state, action) => (Object.assign({}, state, {
    loggedIn: true
  })),

  LOGOUT: (state, action) => (Object.assign({}, state, {
    loggedIn: false
  })),

  FAILLOGIN: (state, action) => (Object.assign({}, state, {
    blocked: true
  })),

  FORGOTTON: (state, { payload }) => (Object.assign({}, state, {
    forgottonstage: payload
  }))
}, initialState)
