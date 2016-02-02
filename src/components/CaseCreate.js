import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as caseActions } from '../redux/modules/cases'
import { Table, Input, ButtonInput } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  cases: state.cases.cases,
  cases_archived: state.cases.cases_archived,
  cases_deleted: state.cases.cases_deleted
})

export default class CaseCreate extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    cases: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired
  };


  render () {
    const messages = this.props.messages.filter(x => x.id == this.props.params.messageId)
    const hasMessages = messages.length > 0
    if (!hasMessages) {
      return (
          <h1>Message not found to create case</h1>
        )
    } else {
      const message = messages[0]
      return (
        <div>
          <h1>Create case</h1>
          { message.message } <hr />
          <form>
            <Input type="text" label="Case subject" placeholder="Enter short summary text" />
            <ButtonInput bsStyle="primary" type="submit" value="Open" />
          </form>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, caseActions)(CaseCreate)
