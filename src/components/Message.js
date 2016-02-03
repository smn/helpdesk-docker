import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../redux/modules/messages'
// import MessageReply from './'
import { Table, Input, Button, Alert } from 'react-bootstrap'
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
    messages: PropTypes.array.isRequired,
    addReply: PropTypes.func.isRequired,
    closeSuccess: PropTypes.func.isRequired,
    alert: PropTypes.bool.isRequired,
    messageOpen: PropTypes.func.isRequired
  };

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
      this.props.addReply({id: parseInt(this.props.params.id, 10), text: text})
      setTimeout(() => this.props.closeSuccess(), 5000)
    }
  }

  render () {
    const messages = this.props.messages.filter(x => x.id === parseInt(this.props.params.id, 10))
    const hasMessages = messages.length > 0
    const searchFaqButton = <Button>Search approved answers</Button>
    const replyBox = (
      <Input
        type='textarea'
        label='Reply'
        placeholder='Enter your response, then hit return'
        autoFocus='true'
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
      />
    )
    const replyForm = (
      <div>
        { replyBox }
        <Input type='text' buttonAfter={searchFaqButton} />
      </div>
    )
    if (!hasMessages) {
      return (
          <h1>Message not found</h1>
        )
    } else {
      const message = messages[0]
      const replies = message.replies.map(reply =>
        <tr key={reply.id}>
          <td>
            { reply.reply }
          </td>
          <td>
            <strong>Sent: </strong>{ moment(reply.sent_at).format('dddd, MMMM Do YYYY, h:mm:ss a') }<br />
            <strong>Sender: </strong>You<br />
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
          <h1>Message from { message.from }</h1>
          { alertbox }
          <Table responsive striped >
            <thead>
              <tr>
                <th>Message</th><th width='300px'>Message Details</th>
              </tr>
            </thead>
            <tbody>
              <tr key={message.id}>
                <td>
                  { message.message }
                </td>
                <td>
                  <strong>Recieved: </strong>{ moment(message.received_at).format('dddd, MMMM Do YYYY, h:mm:ss a') }
                </td>
              </tr>
              { replies }
            </tbody>
          </Table>
          { replyForm }
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, messageActions)(Message)

        // <ButtonInput bsStyle='primary' type='submit' value='Reply' onClick={this.handleReplyClick.bind(this)} />
