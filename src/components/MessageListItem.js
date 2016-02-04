import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Glyphicon, Button } from 'react-bootstrap'

export default class MessageListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    received_at_nice: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onMessageDeleteClicked: PropTypes.func.isRequired,
    onMessageArchiveClicked: PropTypes.func.isRequired
  };
  render () {
    const { id, received_at_nice, from, message, onMessageDeleteClicked, onMessageArchiveClicked } = this.props
    return (
      <tr>
        <td>{ received_at_nice }</td>
        <td>{ from }</td>
        <td><Link to={`/inbox/message/${id}`}>{ message }</Link></td>
        <td width='200px'>
          <Link to={`/inbox/message/${id}`} title='Open Message'><Button><Glyphicon glyph='envelope' /></Button></Link>{ ' ' }
          <Link to={`/cases/create/${id}`} title='Open Case'><Button><Glyphicon glyph='folder-open' /></Button></Link>{ ' ' }
          <Button onClick={() => onMessageArchiveClicked(id)} title='Archive'><Glyphicon glyph='download-alt' /></Button>{ ' ' }
          <Button onClick={() => onMessageDeleteClicked(id)} title='Delete'><Glyphicon glyph='trash' /></Button>
        </td>
      </tr>
    )
  }
}
