import React from 'react';
import { Table } from 'react-bootstrap';
import MessageListItem from './messageListItem.jsx'

const MessageList = (props) => {
    let messages = props.messages.map(message => MessageListItem(message={message})),
      loading = props.loading ? <div className="loading-label">Loading...</div> : '';

    return (
        <div>
            {loading}
            <Table responsive hover>
                <tbody>
                  {messages}
                </tbody>
            </Table>
        </div>
    );
};

MessageList.propTypes = {
  loading : React.PropTypes.bool,
  messages : React.PropTypes.array
}

export default MessageList;
