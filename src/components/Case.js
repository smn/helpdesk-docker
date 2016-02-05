import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../redux/modules/messages'
import { actions as caseActions } from '../redux/modules/cases'
import { AugmentedDataPod } from './'
// import MessageReply from './'
import { Table, Input, Alert, Grid, Row, Col, Tabs, Tab } from 'react-bootstrap'
import moment from 'moment'

const mapStateToProps = (state) => ({
  cases: state.cases.cases,
  messages: state.messages.messages,
  message_open: state.messages.message_open,
  messages_archived: state.messages.messages_archived,
  messages_deleted: state.messages.messages_deleted,
  inboxstage: state.messages.inboxstage,
  alert: state.messages.sent
})

export default class Case extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    cases: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    addReply: PropTypes.func.isRequired,
    closeSuccess: PropTypes.func.isRequired,
    alert: PropTypes.bool.isRequired,
    messageOpen: PropTypes.func.isRequired,
    deleteMessage: PropTypes.func.isRequired,
    archiveMessage: PropTypes.func.isRequired,
    addCase: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired,
    markAsCase: PropTypes.func.isRequired,
    addMessageToCase: PropTypes.func.isRequired
  };

  caseId () {
    return parseInt(this.props.params.id, 10)
  }

  componentDidMount () {

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
      const messageId = Date.now()
      const caseId = this.caseId()
      const newMessage = {'id': messageId, 'received_at_nice': 'Just now', 'received_at': moment().toJSON(), 'from': 'You',
        'message': text,
        'replies': [], case: caseId, archived: false, deleted: false, categories: [], data: []}
      this.props.addMessage(newMessage)
      this.props.addMessageToCase({'caseId': caseId, 'messageId': messageId})
      setTimeout(() => this.props.closeSuccess(), 5000)
    }
  }

  handleArchive () {
    this.props.archiveMessage(this.messageId())
    this.props.history.push('/inbox')
  }

  handleDelete () {
    this.props.deleteMessage(this.messageId())
    this.props.history.push('/inbox')
  }

  handleCaseSubmit (e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.handleCaseSave(text)
      e.target.value = ''
      this.setState({ case_text: '' })
      e.target.blur()
    }
  }

  handleCaseChange (e) {
    this.setState({ case_text: e.target.value })
  }

  handleCaseSave (case_text) {
    if (case_text.length !== 0) {
      this.props.addCase({subject: case_text, from: 'You', messages: [this.messageId()]})
      this.props.markAsCase(this.messageId())
      this.props.history.push('/cases')
    }
  }

  render () {
    const caseobj = this.props.cases[this.caseId()]
    const replyBox = (
      <Input
        type='textarea'
        label='Freeform reply:'
        placeholder='Enter your reply. Press enter to send.'
        autoFocus='true'
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
      />
    )
    const replyForm = (
      <div>

        { replyBox }
      </div>
    )
    // <FaqModal showModal={false} addReply={this.props.handleSave} closeSuccess={this.props.closeSuccess} />

    const addCategoriesForm = (
      <form>
        <Input type='select' label='Add categories to message (hold ctrl/cmd key for multiple)' multiple>
          <option value='compliment'>compliment</option>
          <option value='complaint'>complaint</option>
          <option value='question'>question</option>
          <option value='optout'>optout</option>
        </Input>
      </form>
    )

    const messages = caseobj.messages.map(message =>
      <tr key={this.props.messages[message].id}>
        <td>
          <p>{ this.props.messages[message].message }</p>
          <strong>Sent: </strong>{ moment(this.props.messages[message].received_at).format('dddd, MMMM Do YYYY, h:mm:ss a') } <br />
          <strong>Sender: </strong>{ this.props.messages[message].from }<br />
        </td>
      </tr>
      )

    const alertbox = this.props.alert
      ? <Alert bsStyle='success'>
          <strong>Success</strong> Your message has been sent.
        </Alert>
      : ''
    return (
      <div>

        <Grid>
          <Row>
            <Col sm={12} md={12}>
              <h1>Case from { caseobj.from }</h1>
              { alertbox }
            </Col>
          </Row>
          <Row>
            <Col sm={8} md={8}>
              <Table responsive striped >
                <thead>
                  <tr>
                    <th>Messages</th>
                  </tr>
                </thead>
                <tbody>
                  { messages }
                  <tr>
                    <td>
                      <Tabs defaultActiveKey={1}>
                        <Tab eventKey={1} title='Send a reply'>
                            <br />
                            { replyForm }
                        </Tab>
                        <Tab eventKey={3} title='Add categories'>
                          <br />
                          { addCategoriesForm }
                        </Tab>
                      </Tabs>
                    </td>
                  </tr>
                </tbody>
              </Table>

            </Col>
            <Col sm={4} md={4}>
              <AugmentedDataPod data={{'title': 'Case Information', 'data': [{'Opened At': moment(caseobj.opened_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}]}} />
              <AugmentedDataPod data={{'title': 'MomConnect Information', 'data': caseobj.data}} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const messageAndCaseActions = Object.assign({}, messageActions, caseActions)

export default connect(mapStateToProps, messageAndCaseActions)(Case)

        // <ButtonInput bsStyle='primary' type='submit' value='Reply' onClick={this.handleReplyClick.bind(this)} />
