import Reflux from 'reflux';
import MessageActions from '../actions/messageActions';

let MessageStore = Reflux.createStore({
  listenables: MessageActions,

  init() {
    this.messages = [];
  },

  loadMessages() {
    this.trigger({
      loading: true
    });
  },

  loadMessagesCompleted(messages) {
    this.messages = messages;

    this.trigger({
      messages : this.messages,
      loading: false
    });
  },

  loadMessagesFailed(error) {
    this.trigger({
      error : error,
      loading: false
    });
  }

});

export default MessageStore;
