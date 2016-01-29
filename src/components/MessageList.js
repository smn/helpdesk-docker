import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../redux/modules/messages'
import { MessageListItem } from './'
import { Table } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  messages: state.messages.messages
})
export default class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    deleteMessage: PropTypes.func.isRequired
  };
  render () {
    const { messages } = this.props

    const hasMessages = messages.length > 0
    const nodes = !hasMessages
      ? <tr><td>You currently have no messages to respond to.</td></tr>
      : messages.map(message =>
        <MessageListItem
          key={message.id}
          id={message.id}
          received_at={message.received_at}
          from={message.from}
          message={message.message}
          onMessageDeleteClicked={this.props.deleteMessage} />
      )

    return (
      <Table responsive hover>
        <tbody>
          { nodes }
        </tbody>
      </Table>
    )
  }
}

export default connect(mapStateToProps, messageActions)(MessageList)
