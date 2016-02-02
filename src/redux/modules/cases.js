import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'cases_deleted': [],
  'cases_archived': [],
  'cases': [
    {
      'id': 1,
      'opened_at': '2016-01-22 20:10',
      'subject': 'Needs nurse follow-up',
      'from': '+27845000001',
      'messages': [
        {'id': 1, 'received_at': '2016-01-22 18:01', 'from': '+27845000001', 'message': 'Aliquam pretium risus nisi, ac cursus erat laoreet in. Nunc accumsan mauris eget turpis sagittis, in gravida metus egestas. Sed turpis duis.'}
      ]
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

// ------------------------------------
// Actions
// ------------------------------------
export const deleteCase = createAction(DELETECASE)
export const archiveCase = createAction(ARCHIVECASE)
export const loadCases = createAction(LOADCASES)

export const actions = {
  deleteCase,
  archiveCase,
  loadCases
}

// ------------------------------------
// Reducer
// ------------------------------------

// const pushToStore = (store, item) = {
//   store.push(item)
//   return store
// }

export default handleActions({
  DELETECASE: (state, { payload }) => (Object.assign({}, state, {
    cases: state.cases.filter(x => x.id !== payload),
    cases_deleted: Object.assign([], state.cases_deleted, state.cases_deleted.push(state.cases.filter(x => x.id == payload)[0]))
  })),
  ARCHIVECASE: (state, { payload }) => (Object.assign({}, state, {
    cases: state.cases.filter(x => x.id !== payload),
    cases_archived: Object.assign([], state.cases_archived, state.cases_archived.push(state.cases.filter(x => x.id == payload)[0]))
  })),
  LOADCASES: (state, { payload }) => (Object.assign({}, state, {
    received_at: Date.now()
  }))
}, initialState)
