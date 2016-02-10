import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'loggedIn': false,
  'blocked': false,
  'forgottonstage': 0,
  'organisations': {
    1454665923922: {
      'id': 1454665923922,
      'created_at': '2016-02-05T09:52:03.922Z',
      'name': 'MomConnect Central',
      'description': 'MomConnect Central Helpdesk Team',
      'timezone': 'Africa/Johannesburg',
      'primary_contact': 1454665923901,
      'users': [1454665923901],
      'active': true
    }
  },
  'users': {
    1454665923901: {
      'id': 1454665923901,
      'username': '0845000901',
      'pin': '1234',
      'created_at': '2016-02-01T09:00:03.922Z',
      'name': 'User One',
      'timezone': 'Africa/Johannesburg',
      'organisation': 1454665923922,
      'active': true
    }
  },
  users_all: [1454665923901],
  organisations_all: [1454665923922],
  created: false,
  logged_in_role: null
}

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const FAILLOGIN = 'FAILLOGIN'
export const FORGOTTON = 'FORGOTTON'
export const ADDORGANISATION = 'ADDORGANISATION'
export const ADDUSER = 'ADDUSER'
export const ADDUSERTOORGANISATION = 'ADDUSERTOORGANISATION'
export const CLOSECREATED = 'CLOSECREATED'
export const MARKORGANISATIONSTATE = 'MARKORGANISATIONSTATE'
export const MARKUSERSTATE = 'MARKUSERSTATE'
export const SETUSERROLE = 'SETUSERROLE'

// ------------------------------------
// Actions
// ------------------------------------
export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)
export const faillogin = createAction(FAILLOGIN)
export const forgotton = createAction(FORGOTTON)
export const addOrganisation = createAction(ADDORGANISATION)
export const addUser = createAction(ADDUSER)
export const addUserToOrganisation = createAction(ADDUSERTOORGANISATION)
export const closeCreated = createAction(CLOSECREATED)
export const markOrganisationState = createAction(MARKORGANISATIONSTATE)
export const markUserState = createAction(MARKUSERSTATE)
export const setUserRole = createAction(SETUSERROLE)

export const actions = {
  login,
  logout,
  faillogin,
  forgotton,
  addOrganisation,
  addUser,
  addUserToOrganisation,
  closeCreated,
  markOrganisationState,
  markUserState,
  setUserRole
}

const addNew = (obj, payload) => {
  obj[payload.id] = payload
  return obj
}

const toggleFlag = (obj, payload, flag) => {
  obj[payload][flag] = !obj[payload][flag]
  return obj
}

const pushUserToOrg = (organisations, payload) => {
  organisations[payload.organisationId].users.push(payload.userId)
  return organisations
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
  })),
  ADDORGANISATION: (state, { payload }) => (Object.assign({}, state, {
    organisations: Object.assign({}, addNew(state.organisations, payload)),
    created: true
  })),
  ADDUSER: (state, { payload }) => (Object.assign({}, state, {
    users: Object.assign({}, addNew(state.users, payload)),
    users_all: Object.assign([], state.users_all, [parseInt(payload.id, 10)].concat(state.users_all)),
    created: true
  })),
  ADDUSERTOORGANISATION: (state, { payload }) => (Object.assign({}, state, {
    organisations: pushUserToOrg(state.cases, payload)
  })),
  CLOSECREATED: (state, { payload }) => (Object.assign({}, state, {
    created: false
  })),
  MARKORGANISATIONSTATE: (state, { payload }) => (Object.assign({}, state, {
    organisations: toggleFlag(state.organisations, payload, 'active')
  })),
  MARKUSERSTATE: (state, { payload }) => (Object.assign({}, state, {
    users: toggleFlag(state.users, payload, 'active')
  })),
  SETUSERROLE: (state, { payload }) => (Object.assign({}, state, {
    logged_in_role: payload
  }))
}, initialState)
