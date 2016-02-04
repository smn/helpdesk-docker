import { createAction, handleActions } from 'redux-actions'
import moment from 'moment'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'messages': [
    {'id': 1, 'received_at_nice': 'Today at 18:01', 'received_at': '2016-01-22 18:01', 'from': '+27845000001',
      'message': 'I\'m still breastfeeding my baby. Can I get pregnant again if I just had a baby and am still feeding her milk?',
      'replies': [], case: null
    },
    {'id': 2, 'received_at_nice': 'Today at 12:01', 'received_at': '2016-01-22 12:01', 'from': '+27845000002',
      'message': 'I am very scared, my baby has diarrhoea and it’s not going away. What do I do?',
      'replies': [], case: null
    },
    {'id': 3, 'received_at_nice': 'Yesterday at 08:01', 'received_at': '2016-01-21 08:01', 'from': '+27845000003',
      'message': 'My baby is sleeping a lot, is that normal?',
      'replies': [], case: null
    },
    {'id': 4, 'received_at_nice': '2 days ago at 22:11', 'received_at': '2016-01-20 22:11', 'from': '+27845000003',
      'message': 'How many times must I visit the clinic when I am pregnant?',
      'replies': [], case: null
    },
    {'id': 5, 'received_at_nice': '2 days ago at 20:14', 'received_at': '2016-01-20 20:14', 'from': '+27845000033',
      'message': 'I am 4 months pregnant and I am crying a lot and don\'t know why. Is something wrong with me or my baby?',
      'replies': [], case: null
    },
    {'id': 6, 'received_at_nice': '2 days ago at 18:39', 'received_at': '2016-01-20 18:39', 'from': '+27845000045',
      'message': 'I want to register my baby. Where must I go?',
      'replies': [], case: null
    },
    {'id': 7, 'received_at_nice': '2 days ago at 17:33', 'received_at': '2016-01-20 17:33', 'from': '+27845000023',
      'message': 'My friend said I must take my baby for vaccine. I don\'t want to, why must I give my baby injections?',
      'replies': [], case: null
    },
    {'id': 8, 'received_at_nice': '2 days ago at 15:56', 'received_at': '2016-01-20 15:56', 'from': '+27845000011',
      'message': 'My feet are sore and swollen, is this normal?',
      'replies': [], case: null
    },
    {'id': 9, 'received_at_nice': '2 days ago at 15:44', 'received_at': '2016-01-20 15:44', 'from': '+27845000076',
      'message': 'I am 6 months pregnant. I am feeling very tired and sick all the time. What should I do?',
      'replies': [], case: null
    },
    {'id': 10, 'received_at_nice': '2 days ago at 11:03', 'received_at': '2016-01-20 11:03', 'from': '+27845000047',
      'message': 'When will I start feeling the baby moving?',
      'replies': [], case: null
    },
    {'id': 11, 'received_at_nice': '2 days ago at 09:03', 'received_at': '2016-01-20 09:03', 'from': '+27845000099',
      'message': 'i havnt felt my baby move for 2 days. Wat shld i do?',
      'replies': [], case: null
    }
  ],
  'messages_deleted': [],
  'messages_archived': [],
  'messages_cases': [],
  'message_open': {},
  'inboxstage': 0,
  'received_at': null,
  'sent': false
}

// ------------------------------------
// Constants
// ------------------------------------
export const DELETEMESSAGE = 'DELETEMESSAGE'
export const ARCHIVEMESSAGE = 'ARCHIVEMESSAGE'
export const LOADMESSAGES = 'LOADMESSAGES'
export const ADDREPLY = 'ADDREPLY'
export const CLOSESUCCESS = 'CLOSESUCCESS'
export const MARKASCASE = 'MARKASCASE'
export const MESSAGEOPEN = 'MESSAGEOPEN'

// ------------------------------------
// Actions
// ------------------------------------
export const deleteMessage = createAction(DELETEMESSAGE)
export const archiveMessage = createAction(ARCHIVEMESSAGE)
export const loadMessages = createAction(LOADMESSAGES)
export const addReply = createAction(ADDREPLY)
export const closeSuccess = createAction(CLOSESUCCESS)
export const markAsCase = createAction(MARKASCASE)
export const messageOpen = createAction(MESSAGEOPEN)

export const actions = {
  deleteMessage,
  archiveMessage,
  addReply,
  loadMessages,
  closeSuccess,
  markAsCase,
  messageOpen
}

// ------------------------------------
// Reducer
// ------------------------------------

const pushReply = (messages, payload) => {
  messages.forEach(function (e, i) {
    if (e.id === payload.id) {
      e.replies.push({id: Date.now(), sent_at: moment().toJSON(), reply: payload.text})
    }
  })
  return messages
}

export default handleActions({
  DELETEMESSAGE: (state, { payload }) => (Object.assign({}, state, {
    messages: state.messages.filter(x => x.id !== payload),
    messages_deleted: Object.assign([], state.messages_deleted, state.messages_deleted.push(state.messages.filter(x => x.id === parseInt(payload, 10))[0]))
  })),
  ARCHIVEMESSAGE: (state, { payload }) => (Object.assign({}, state, {
    messages: state.messages.filter(x => x.id !== payload),
    messages_archived: Object.assign([], state.messages_archived, state.messages_archived.push(state.messages.filter(x => x.id === parseInt(payload, 10))[0]))
  })),
  LOADMESSAGES: (state, { payload }) => (Object.assign({}, state, {
    received_at: moment().toJSON()
  })),
  ADDREPLY: (state, { payload }) => (Object.assign({}, state, {
    messages: pushReply(state.messages, payload),
    sent: true
  })),
  CLOSESUCCESS: (state, { payload }) => (Object.assign({}, state, {
    sent: false
  })),
  MARKASCASE: (state, { payload }) => (Object.assign({}, state, {
    messages: state.messages.filter(x => x.id !== payload),
    messages_cases: Object.assign([], state.messages_cases, state.messages_cases.push(state.messages.filter(x => x.id === parseInt(payload, 10))[0]))
  })),
  MESSAGEOPEN: (state, { payload }) => (Object.assign({}, state, {
    message_open: payload
  }))
}, initialState)
