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



// 'Aliquam pretium risus nisi, ac cursus erat laoreet in. Nunc accumsan mauris eget turpis sagittis, in gravida metus egestas. Sed turpis duis.'
// 'Phasellus consectetur lacinia lacinia. Aliquam eleifend interdum velit eget pulvinar. Nullam sodales facilisis velit vitae porttitor nullam'
// 'Fusce porttitor ante a nibh suscipit euismod. Etiam vel vulputate diam, a dictum erat. Etiam imperdiet arcu eget arcu varius porta volutpat.'
// 'Sed vitae mattis nibh. Maecenas sit amet fermentum tortor, eget suscipit diam. Phasellus tellus urna, elementum a urna et, mattis cras amet.'
// 'Nullam ut euismod mi. Etiam elementum, risus et volutpat ornare, sapien quam laoreet odio, ut luctus ligula nunc id lorem. Sed orci aliquam.'
// 'Duis eget tellus vulputate, ullamcorper metus sit amet, scelerisque massa. Pellentesque gravida varius felis sed viverra. Nunc orci aliquam.'
// 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet lacus pharetra, volutpat diam vitae metus.'
// 'Fusce a lorem metus. Fusce congue dapibus enim in porttitor. Nam magna enim, dignissim vel diam sit amet, suscipit facilisis est massa nunc.'
