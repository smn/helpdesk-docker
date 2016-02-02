import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as caseActions } from '../redux/modules/cases'
import { Table } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  cases: state.cases.cases,
  cases_archived: state.cases.cases_archived,
  cases_deleted: state.cases.cases_deleted
})

export default class Case extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    cases: PropTypes.array.isRequired
  };

  componentDidMount() {
    // from the path `/inbox/cases/:id`
    const id = this.props.params.id
    console.log('CASE MOUNTED:')
    console.log(id)
  }

  render () {
    const cases = this.props.cases.filter(x => x.id == this.props.params.id)
    const hasCases = cases.length > 0
    const nodes = !hasCases
      ? <tr><td>Case not found.</td></tr>
    : cases.map(caseobj => <tr key={caseobj.id}>
        <td>{ caseobj.opened_at }</td>
        <td>{ caseobj.from }</td>
        <td>{ caseobj.subject }</td>
      </tr>)

    return (
      <div>
        <h1>Case Details:</h1>
        <Table>
          <tbody>
            { nodes }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect(mapStateToProps, caseActions)(Case)
