import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../redux/modules/messages'
import { actions as caseActions } from '../redux/modules/cases'
import { FaqModal, AugmentedDataPod } from './'
// import MessageReply from './'
import { Table, Input, Button, Alert, Grid, Row, Col, Glyphicon, Tabs, Tab } from 'react-bootstrap'
import moment from 'moment'

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  message_open: state.messages.message_open,
  messages_archived: state.messages.messages_archived,
  messages_deleted: state.messages.messages_deleted,
  inboxstage: state.messages.inboxstage,
  alert: state.messages.sent
})

export default class Message extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    addReply: PropTypes.func.isRequired,
    closeSuccess: PropTypes.func.isRequired,
    alert: PropTypes.bool.isRequired,
    messageOpen: PropTypes.func.isRequired,
    deleteMessage: PropTypes.func.isRequired,
    archiveMessage: PropTypes.func.isRequired,
    addCase: PropTypes.func.isRequired,
    markAsCase: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired
  };

  messageId () {
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
      this.props.addReply({id: this.messageId(), text: text})
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
      const caseId = Date.now()
      this.props.addCase({id: caseId, subject: case_text, from: this.props.messages[this.messageId()].from, messages: [this.messageId()], data: this.props.messages[this.messageId()].data})
      this.props.markAsCase(this.messageId())
      this.props.history.push('/cases')
    }
  }

  onAddCategoryButtonClicked (category) {
    this.props.addCategory({'id': this.messageId(), 'category': category})
    setTimeout(() => this.props.closeSuccess(), 5000)
  }

  render () {
    const message = this.props.messages[this.messageId()]
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
        <FaqModal showModal={false} />
        { replyBox }
      </div>
    )

    const newCaseForm = (
      <form>
        <Input type='text' label='Case subject' placeholder='Enter a short description/summary for the case. Press enter to create the case.'
          onChange={this.handleCaseChange.bind(this)}
          onKeyDown={this.handleCaseSubmit.bind(this)} />
      </form>
    )

    const addCategoriesForm = (
      <div>
        <Button onClick={() => this.onAddCategoryButtonClicked('compliment')} title='Compliment'><Glyphicon glyph='plus' /></Button> Compliment<br />
        <Button onClick={() => this.onAddCategoryButtonClicked('complaint')} title='Complaint'><Glyphicon glyph='plus' /></Button> Complaint<br />
        <Button onClick={() => this.onAddCategoryButtonClicked('question')} title='Question'><Glyphicon glyph='plus' /></Button> Question<br />
        <Button onClick={() => this.onAddCategoryButtonClicked('optout')} title='Optout'><Glyphicon glyph='plus' /></Button> Optout
      </div>
    )

    const replies = message.replies.map(reply =>
      <tr key={reply.id}>
        <td>
          <p>{ reply.reply }</p>
          <strong>Sent: </strong>{ moment(reply.sent_at).format('dddd, MMMM Do YYYY, h:mm:ss a') } <br />
          <strong>Sender: </strong>Yvou<br />
        </td>
      </tr>
      )

    const alertbox = this.props.alert
      ? <Alert bsStyle='success'>
          <strong>Success!</strong>
        </Alert>
      : ''
    return (
      <div>

        <Grid>
          <Row>
            <Col sm={12} md={12}>
              <h1>Message from { message.from }</h1>
              { alertbox }
            </Col>
          </Row>
          <Row>
            <Col sm={8} md={8}>
              <Table responsive striped >
                <thead>
                  <tr>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={message.id}>
                    <td>
                      { message.message }
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive striped >
                <thead>
                  <tr>
                    <th>Responses</th>
                  </tr>
                </thead>
                <tbody>
                  { replies }
                  <tr>
                    <td>
                      <Tabs defaultActiveKey={1}>
                        <Tab eventKey={1} title='Send a reply'>
                            <br />
                            { replyForm }
                        </Tab>
                        <Tab eventKey={2} title='Open a case'>
                          <br />
                          { newCaseForm }
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
              <Button onClick={() => this.handleArchive() }><Glyphicon glyph='download-alt' /> &nbsp;Archive</Button>{ ' ' }
              <Button onClick={() => this.handleDelete() }><Glyphicon glyph='trash' /> &nbsp;Delete</Button>
              <hr />
              <AugmentedDataPod data={{'title': 'Message Information', 'data': [{'Recieved': moment(message.received_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}, {'Categories': message.categories}]}} />
              <AugmentedDataPod data={{'title': 'MomConnect Information', 'data': message.data}} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const messageAndCaseActions = Object.assign({}, messageActions, caseActions)

export default connect(mapStateToProps, messageAndCaseActions)(Message)

        // <ButtonInput bsStyle='primary' type='submit' value='Reply' onClick={this.handleReplyClick.bind(this)} />
