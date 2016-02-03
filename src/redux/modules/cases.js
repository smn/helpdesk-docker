import { createAction, handleActions } from 'redux-actions'
// import { UPDATE_LOCATION } from 'react-router-redux'
import moment from 'moment'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'case_open': {},
  'cases_deleted': [],
  'cases_archived': [],
  'cases': [
    {
      'id': 1,
      'opened_at': '2016-01-22 20:10',
      'subject': 'Needs nurse follow-up',
      'from': '+27845000001',
      'messages': [1]
    }
  ],
  received_at: null
}

// ------------------------------------
// Constants
// ------------------------------------
export const DELETECASE = 'DELETECASE'
export const ARCHIVECASE = 'ARCHIVECASE'
export const LOADCASES = 'LOADCASES'
export const ADDCASE = 'ADDCASE'

// ------------------------------------
// Actions
// ------------------------------------
export const deleteCase = createAction(DELETECASE)
export const archiveCase = createAction(ARCHIVECASE)
export const loadCases = createAction(LOADCASES)
export const addCase = createAction(ADDCASE)

export const actions = {
  deleteCase,
  archiveCase,
  loadCases,
  addCase
}

// ------------------------------------
// Reducer
// ------------------------------------

const pushCase = (cases, payload) => {
  cases.push({id: Date.now(), opened_at: moment().toJSON(), subject: payload.subject, from: payload.from, messages: payload.messages})
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
    cases: pushCase(state.cases, payload)
  }))
}, initialState)
