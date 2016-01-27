import React from 'react';
import { Glyphicon } from 'react-bootstrap'

const MessageListItem = (props) => {
    let message = props.message;

    return (
        <tr key={ message.id }>
            <td>{ message.received_at }</td>
            <td>{ message.from }</td>
            <td>{ message.message }</td>
            <td>Actions: <Glyphicon glyph="trash" /></td>
        </tr>
    );
};

export default MessageListItem;
