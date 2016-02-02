import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'messages': [
    {'id': 1, 'received_at_nice': 'Today at 18:01', 'received_at': '2016-01-22 18:01', 'from': '+27845000001', 'message': 'Aliquam pretium risus nisi, ac cursus erat laoreet in. Nunc accumsan mauris eget turpis sagittis, in gravida metus egestas. Sed turpis duis.'},
    {'id': 2, 'received_at_nice': 'Today at 12:01', 'received_at': '2016-01-22 12:01', 'from': '+27845000002', 'message': 'Phasellus consectetur lacinia lacinia. Aliquam eleifend interdum velit eget pulvinar. Nullam sodales facilisis velit vitae porttitor nullam'},
    {'id': 3, 'received_at_nice': 'Yesterday at 08:01', 'received_at': '2016-01-21 08:01', 'from': '+27845000003', 'message': 'Phasellus consectetur lacinia lacinia. Aliquam eleifend interdum velit eget pulvinar. Nullam sodales facilisis velit vitae porttitor nullam'},
    {'id': 4, 'received_at_nice': '2 days ago at 18:11', 'received_at': '2016-01-20 18:11', 'from': '+27845000003', 'message': 'Fusce porttitor ante a nibh suscipit euismod. Etiam vel vulputate diam, a dictum erat. Etiam imperdiet arcu eget arcu varius porta volutpat.'}
  ],
  'messages_deleted': [],
  'messages_archived': [],
  'inboxstage': 0,
  'received_at': null
}

// ------------------------------------
// Constants
// ------------------------------------
export const DELETEMESSAGE = 'DELETEMESSAGE'
export const ARCHIVEMESSAGE = 'ARCHIVEMESSAGE'
export const LOADMESSAGES = 'LOADMESSAGES'

// ------------------------------------
// Actions
// ------------------------------------
export const deleteMessage = createAction(DELETEMESSAGE)
export const archiveMessage = createAction(ARCHIVEMESSAGE)
export const loadMessages = createAction(LOADMESSAGES)

export const actions = {
  deleteMessage,
  archiveMessage,
  loadMessages
}

// ------------------------------------
// Reducer
// ------------------------------------

// const pushToStore = (store, item) = {
//   store.push(item)
//   return store
// }

export default handleActions({
  DELETEMESSAGE: (state, { payload }) => (Object.assign({}, state, {
    messages: state.messages.filter(x => x.id !== payload),
    messages_deleted: Object.assign([], state.messages_deleted, state.messages_deleted.push(state.messages.filter(x => x.id == payload)[0]))
  })),
  ARCHIVEMESSAGE: (state, { payload }) => (Object.assign({}, state, {
    messages: state.messages.filter(x => x.id !== payload),
    messages_archived: Object.assign([], state.messages_archived, state.messages_archived.push(state.messages.filter(x => x.id == payload)[0]))
  })),
  LOADMESSAGES: (state, { payload }) => (Object.assign({}, state, {
    received_at: Date.now()
  }))
}, initialState)
