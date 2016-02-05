import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Glyphicon, Button } from 'react-bootstrap'
import moment from 'moment'

export default class CaseListItem extends Component {
  static propTypes = {
    caseobj: PropTypes.object.isRequired,
    onCaseDeleteClicked: PropTypes.func.isRequired,
    onCaseArchiveClicked: PropTypes.func.isRequired
  };
  render () {
    const { caseobj, onCaseDeleteClicked, onCaseArchiveClicked } = this.props
    return (
      <tr>
        <td>{ moment(caseobj.opened_at).format('dddd, MMMM Do YYYY, h:mm:ss a') }</td>
        <td>{ caseobj.from }</td>
        <td><Link to={`/cases/case/${caseobj.id}`}>{ caseobj.subject }</Link></td>
        <td>
          <Button onClick={() => onCaseDeleteClicked(caseobj.id)}><Glyphicon glyph='envelope' /></Button>
          <Button onClick={() => onCaseArchiveClicked(caseobj.id)}><Glyphicon glyph='download-alt' /></Button>
        </td>
      </tr>
    )
  }
}
