import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../redux/modules/messages'
import { MessageListItem } from './'
import { Table } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  messages_archived: state.messages.messages_archived,
  messages_deleted: state.messages.messages_deleted,
  inboxstage: state.messages.inboxstage
})

export default class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    messages_deleted: PropTypes.array.isRequired,
    messages_archived: PropTypes.array.isRequired,
    deleteMessage: PropTypes.func.isRequired,
    archiveMessage: PropTypes.func.isRequired,
    unarchiveMessage: PropTypes.func.isRequired,
    loadMessages: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
  };

  componentDidMount () {
    // this.props.loadMessages()
  }

  getMessages (filter) {
    if (filter === 'archive') {
      return this.props.messages_archived
    } else {
      return this.props.messages
    }
  }

  render () {
    const filter = this.props.params.filter
    const messages = this.getMessages(filter)
    const hasMessages = messages.length > 0
    const nodes = !hasMessages
      ? <tr><td>There are current no messages in this view.</td></tr>
    : messages.map(message =>
        <MessageListItem
          key={message.id}
          id={message.id}
          received_at_nice={message.received_at_nice}
          from={message.from}
          message={message.message}
          filter={filter}
          onMessageDeleteClicked={this.props.deleteMessage}
          onMessageArchiveClicked={this.props.archiveMessage}
          onMessageUnarchiveClicked={this.props.unarchiveMessage} />
      )

    return (
      <Table responsive striped hover>
        <tbody>
         { nodes }
         {this.props.children}
        </tbody>
      </Table>
    )
  }
}

export default connect(mapStateToProps, messageActions)(MessageList)
