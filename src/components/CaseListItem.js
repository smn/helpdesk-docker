import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Glyphicon, Button } from 'react-bootstrap'
import moment from 'moment'

export default class CaseListItem extends Component {
  static propTypes = {
    caseobj: PropTypes.object.isRequired
  };
  render () {
    const { caseobj } = this.props
    return (
      <tr>
        <td>{ moment(caseobj.opened_at).format('dddd, MMMM Do YYYY, h:mm:ss a') }</td>
        <td>{ caseobj.from }</td>
        <td><Link to={`/cases/case/${caseobj.id}`}>{ caseobj.subject }</Link></td>
        <td>
          <Link to={`/cases/case/${caseobj.id}`}><Button><Glyphicon glyph='envelope' /></Button></Link>
        </td>
      </tr>
    )
  }
}
