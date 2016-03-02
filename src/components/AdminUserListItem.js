import React, { Component, PropTypes } from 'react'
import { Glyphicon, Button } from 'react-bootstrap'
import moment from 'moment'

export default class AdminUserListItem extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onUserDeactivateClicked: PropTypes.func.isRequired
  };
  render () {
    const { user, onUserDeactivateClicked } = this.props
    const actions = (
        <div>
          <Button onClick={() => onUserDeactivateClicked(user.id)} title='Deactivate'><Glyphicon glyph='off' /></Button>
        </div>
      )

    return (
      <tr>
        <td>{ moment(user.created_at).format('ddd, MMM Do, h:mm:ss a') }</td>
        <td>{ user.name }</td>
        <td>
          { actions }
        </td>
      </tr>
    )
  }
}
