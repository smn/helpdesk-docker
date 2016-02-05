import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Glyphicon, Button } from 'react-bootstrap'
import moment from 'moment'

export default class DiscussionListItem extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    onDiscussionPinClicked: PropTypes.func.isRequired
  };
  render () {
    const { message, onDiscussionPinClicked } = this.props
    const actions = (
        <div>
          <Button onClick={() => onDiscussionPinClicked(message.id)} title='Pin'><Glyphicon glyph='pushpin' /></Button>
        </div>
      )

    return (
      <tr>
        <td>{ moment(message.created_at).format('ddd, MMM Do, h:mm:ss a') }</td>
        <td>{ message.from }:</td>
        <td>{ message.body }</td>
        <td>
          { actions }
        </td>
      </tr>
    )
  }
}
