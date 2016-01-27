import Reflux from 'reflux';

const MessageActions = Reflux.createActions({
  'loadMessages': {children: ['completed', 'failed']}
});

MessageActions.loadMessages.listen(function(){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(() => {
    const messages = [{id: 1, received_at: '2016-01-22 18:01', from:'+27001', message:'This is a test'}, {id: 2, received_at: '2016-01-22 12:01', from:'+27002', message:'This is a test again'}, {id: 3, received_at: '2016-01-21 08:01', from:'+27003', message:'This is a test once more'}];
    this.completed(messages);

    // on error
    // this.failed('an error occured');
  }, 500);
});

export default MessageActions;
