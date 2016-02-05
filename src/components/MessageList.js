import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../redux/modules/messages'
import { MessageListItem } from './'
import { Table } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  messages_archived: state.messages.messages_archived,
  messages_inbox: state.messages.messages_inbox,
  inboxstage: state.messages.inboxstage
})

export default class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired,
    messages_archived: PropTypes.array.isRequired,
    messages_inbox: PropTypes.array.isRequired,
    deleteMessage: PropTypes.func.isRequired,
    archiveMessage: PropTypes.func.isRequired,
    unarchiveMessage: PropTypes.func.isRequired,
    loadMessages: PropTypes.func.isRequired,
    setView: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
  };

  componentDidMount () {
    // this.props.loadMessages()

  }

  getMessages (filter) {
    if (filter === 'archived') {
      return this.props.messages_archived
    } else {
      return this.props.messages_inbox
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
          key={message}
          message={this.props.messages[message]}
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
