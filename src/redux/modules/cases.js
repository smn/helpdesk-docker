import { createAction, handleActions } from 'redux-actions'
// import { UPDATE_LOCATION } from 'react-router-redux'
import moment from 'moment'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'cases': {
    1454665923921: {
      'id': 1454665923921,
      'opened_at': '2016-02-05T09:52:03.922Z',
      'subject': 'New case from the region',
      'from': '+27845000001',
      'messages': [10],
      'data': [{'Clinic Code': '343242'}, {'Language': 'en'}, {'Registered': 'Yes'}]
    }
  },
  'cases_open': [1454665923921],
  'cases_deleted': [],
  'cases_archived': [],
  received_at: null
}

// ------------------------------------
// Constants
// ------------------------------------
export const DELETECASE = 'DELETECASE'
export const ARCHIVECASE = 'ARCHIVECASE'
export const LOADCASES = 'LOADCASES'
export const ADDCASE = 'ADDCASE'
export const ADDMESSAGETOCASE = 'ADDMESSAGETOCASE'

// ------------------------------------
// Actions
// ------------------------------------
export const deleteCase = createAction(DELETECASE)
export const archiveCase = createAction(ARCHIVECASE)
export const loadCases = createAction(LOADCASES)
export const addCase = createAction(ADDCASE)
export const addMessageToCase = createAction(ADDMESSAGETOCASE)

export const actions = {
  deleteCase,
  archiveCase,
  loadCases,
  addCase,
  addMessageToCase
}

// ------------------------------------
// Reducer
// ------------------------------------

const pushCase = (cases, payload) => {
  cases[payload.id] = {id: payload.id, opened_at: moment().toJSON(), subject: payload.subject, from: payload.from, messages: payload.messages, data: payload.data}
  return cases
}

const addMessage = (cases, payload) => {
  cases[payload.caseId].messages.push(payload.messageId)
  return cases
}

export default handleActions({
  DELETECASE: (state, { payload }) => (Object.assign({}, state, {
    cases: state.cases.filter(x => x.id !== payload),
    cases_deleted: Object.assign([], state.cases_deleted, state.cases_deleted.push(state.cases.filter(x => x.id === parseInt(payload, 10))[0]))
  })),
  ARCHIVECASE: (state, { payload }) => (Object.assign({}, state, {
    cases: state.cases.filter(x => x.id !== payload),
    cases_archived: Object.assign([], state.cases_archived, state.cases_archived.push(state.cases.filter(x => x.id === parseInt(payload, 10))[0]))
  })),
  LOADCASES: (state, { payload }) => (Object.assign({}, state, {
    received_at: Date.now()
  })),
  ADDCASE: (state, { payload }) => (Object.assign({}, state, {
    cases: pushCase(state.cases, payload),
    cases_open: Object.assign([], state.cases_open, state.cases_open.push(payload.id))
  })),
  ADDMESSAGETOCASE: (state, { payload }) => (Object.assign({}, state, {
    cases: addMessage(state.cases, payload)
  }))
}, initialState)
