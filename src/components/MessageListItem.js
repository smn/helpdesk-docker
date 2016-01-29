import React, { Component, PropTypes } from 'react'
import { Glyphicon, Button } from 'react-bootstrap'

export default class MessageListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    received_at: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onMessageDeleteClicked: PropTypes.func.isRequired
  };
  render () {
    const { id, received_at, from, message, onMessageDeleteClicked } = this.props
    return (
      <tr>
        <td>{ received_at }</td>
        <td>{ from }</td>
        <td>{ message }</td>
        <td>Actions:
          <Button onClick={() => onMessageDeleteClicked(id)}><Glyphicon glyph='trash' /></Button>
        </td>
      </tr>
    )
  }
}
