import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as caseActions } from '../redux/modules/cases'
import { actions as messageActions } from '../redux/modules/messages'
import { Input, Button, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router'

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  cases: state.cases.cases,
  cases_archived: state.cases.cases_archived,
  cases_deleted: state.cases.cases_deleted
})

export default class CaseCreate extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    cases: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired,
    addCase: PropTypes.func.isRequired,
    markAsCase: PropTypes.func.isRequired
  };

  messageId () {
    return parseInt(this.props.params.messageId, 10)
  }

  handleSubmit (e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.handleSave(text)
      e.target.value = ''
      this.setState({ text: '' })
      e.target.blur()
    }
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  handleSave (text) {
    if (text.length !== 0) {
      this.props.addCase({subject: text, from: 'You', messages: [this.messageId()]})
      this.props.markAsCase(this.messageId())
      this.props.history.push('/cases')
    }
  }

  render () {
    const messages = this.props.messages.filter(x => x.id === this.messageId())
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
          <strong>Initial message:</strong> { message.message } <hr />
          <p><Link to={`/inbox/message/${message.id}`}><Button><Glyphicon glyph='envelope' /> Back to message details</Button></Link></p>
          <form>
            <Input type='text' label='Case subject' placeholder='Enter a short description/summary for the case. Press enter to create the case.'
              onChange={this.handleChange.bind(this)}
              onKeyDown={this.handleSubmit.bind(this)} />
          </form>
        </div>
      )
    }
  }
}

const allActions = Object.assign({}, caseActions, messageActions)

export default connect(mapStateToProps, allActions)(CaseCreate)
