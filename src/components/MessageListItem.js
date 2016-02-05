import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Glyphicon, Button } from 'react-bootstrap'

export default class MessageListItem extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    onMessageDeleteClicked: PropTypes.func.isRequired,
    onMessageArchiveClicked: PropTypes.func.isRequired,
    onMessageUnarchiveClicked: PropTypes.func.isRequired
  };
  render () {
    const { message, filter, onMessageDeleteClicked, onMessageArchiveClicked, onMessageUnarchiveClicked } = this.props
    let actions
    if (filter === 'archived') {
      actions = (
        <div>
          <Button onClick={() => onMessageUnarchiveClicked(message.id)} title='Restore'><Glyphicon glyph='open' /></Button>
        </div>
      )
    } else {
      actions = (
        <div>
          <Link to={`/inbox/message/${message.id}`} title='Open Message'><Button><Glyphicon glyph='envelope' /></Button></Link>{ ' ' }
          <Link to={`/inbox/message/${message.id}`} title='Open Case'><Button><Glyphicon glyph='folder-open' /></Button></Link>{ ' ' }
          <Button onClick={() => onMessageArchiveClicked(message.id)} title='Archive'><Glyphicon glyph='save' /></Button>{ ' ' }
          <Button onClick={() => onMessageDeleteClicked(message.id)} title='Delete'><Glyphicon glyph='trash' /></Button>
        </div>
      )
    }
    return (
      <tr>
        <td>{ message.received_at_nice }</td>
        <td>{ message.from }</td>
        <td><Link to={`/inbox/message/${message.id}`}>{ message.message }</Link></td>
        <td width='195px'>
          { actions }
        </td>
      </tr>
    )
  }
}
