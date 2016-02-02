import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Glyphicon, Button } from 'react-bootstrap'

export default class CaseListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    opened_at: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    onCaseDeleteClicked: PropTypes.func.isRequired,
    onCaseArchiveClicked: PropTypes.func.isRequired
  };
  render () {
    const { id, opened_at, from, subject, onCaseDeleteClicked, onCaseArchiveClicked } = this.props
    return (
      <tr>
        <td>{ opened_at }</td>
        <td>{ from }</td>
        <td><Link to={`/cases/case/${id}`}>{ subject }</Link></td>
        <td>
          <Button onClick={() => onCaseDeleteClicked(id)}><Glyphicon glyph='envelope' /></Button>
          <Button onClick={() => onCaseArchiveClicked(id)}><Glyphicon glyph='download-alt' /></Button>
        </td>
      </tr>
    )
  }
}
