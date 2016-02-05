import { createAction, handleActions } from 'redux-actions'
// import { UPDATE_LOCATION } from 'react-router-redux'
import moment from 'moment'

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  'internalmessages': {
    1454665923921: {
      'id': 1454665923921,
      'created_at': '2016-02-05T09:52:03.922Z',
      'body': 'I had two compliments today for Western Cape clinics that used to get lots of complaints! Yay!',
      'from': 'Jane',
      'pinned': false
    },
    1454665923922: {
      'id': 1454665923922,
      'created_at': '2016-02-05T07:12:22.922Z',
      'body': 'I added two more FAQ answers today for the new breastfeeding guidelines',
      'from': 'Jane',
      'pinned': true
    }
  },
  'internalmessages_normal': [1454665923921],
  'internalmessages_pinned': [1454665923922],
  'sent': false
}

// ------------------------------------
// Constants
// ------------------------------------
export const ADDINTERNALMESSAGE = 'ADDINTERNALMESSAGE'
export const PINMESSAGE = 'PINMESSAGE'

// ------------------------------------
// Actions
// ------------------------------------
export const addInternalMessage = createAction(ADDINTERNALMESSAGE)
export const pinMessage = createAction(PINMESSAGE)

export const actions = {
  addInternalMessage,
  pinMessage
}

// ------------------------------------
// Reducer
// ------------------------------------

const pushInternalMessage = (internalmessages, payload) => {
  internalmessages[payload.id] = {id: payload.id, created_at: moment().toJSON(), body: payload.body, from: 'You'}
  return internalmessages
}

export default handleActions({
  ADDINTERNALMESSAGE: (state, { payload }) => (Object.assign({}, state, {
    internalmessages: pushInternalMessage(state.internalmessages, payload),
    internalmessages_normal: Object.assign([], state.internalmessages_normal, [parseInt(payload.id, 10)].concat(state.internalmessages_normal))
  })),
  PINMESSAGE: (state, { payload }) => (Object.assign({}, state, {
    internalmessages_pinned: Object.assign([], state.internalmessages_pinned, state.internalmessages_pinned.push(parseInt(payload, 10))),
    internalmessages_normal: state.internalmessages_normal.filter(x => x !== parseInt(payload, 10))
  }))
}, initialState)
