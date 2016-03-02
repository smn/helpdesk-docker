import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { actions as messageActions } from '../redux/modules/messages'
import { MessageListItem } from './'
import { Table, Nav, NavDropdown, NavItem, MenuItem, Button, Glyphicon, Input, Collapse, Well } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  messages_archived: state.messages.messages_archived,
  messages_inbox: state.messages.messages_inbox,
  inboxstage: state.messages.inboxstage
})

export default class MessageList extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      showSearch: false,
      target: null
    }
  }

  static propTypes = {
    filter: PropTypes.string,
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

  openSearch (e) {
    this.setState({ target: e.target, showSearch: !this.state.showSearch })
  }

  getMessages (filter) {
    let filtered = []
    let i
    const messageIds = Object.keys(this.props.messages)
    switch (filter) {
      case 'archived':
        return this.props.messages_archived
      case 'question':
        for (i = 1; i < messageIds.length + 1; i++) {
          if (this.props.messages[i].categories.indexOf('question') !== -1) {
            filtered.push(this.props.messages[i].id)
          }
        }
        return filtered
      case 'complaint':
        for (i = 1; i < messageIds.length + 1; i++) {
          if (this.props.messages[i].categories.indexOf('complaint') !== -1) {
            filtered.push(this.props.messages[i].id)
          }
        }
        return filtered
      case 'compliment':
        for (i = 1; i < messageIds.length + 1; i++) {
          if (this.props.messages[i].categories.indexOf('compliment') !== -1) {
            filtered.push(this.props.messages[i].id)
          }
        }
        return filtered
      case 'optout':
        for (i = 1; i < messageIds.length + 1; i++) {
          if (this.props.messages[i].categories.indexOf('optout') !== -1) {
            filtered.push(this.props.messages[i].id)
          }
        }
        return filtered
      default:
        return this.props.messages_inbox
    }
  }

  makeHeader (filter) {
    if (filter === 'archived') {
      return <h3>Archive</h3>
    } else {
      return (
      <div>
        <Nav bsStyle='tabs' activeKey={1}>
          <LinkContainer to={{ pathname: '/inbox' }}><NavItem eventKey={1}>Inbox</NavItem></LinkContainer>
            <NavDropdown eventKey={4} title='Category' id='nav-dropdown'>
              <LinkContainer to={{ pathname: '/inbox/filter/question' }}><MenuItem eventKey='2.1'>Questions</MenuItem></LinkContainer>
              <LinkContainer to={{ pathname: '/inbox/filter/compliment' }}><MenuItem eventKey='2.4'>Compliments</MenuItem></LinkContainer>
              <LinkContainer to={{ pathname: '/inbox/filter/complaint' }}><MenuItem eventKey='2.4'>Complaints</MenuItem></LinkContainer>
              <LinkContainer to={{ pathname: '/inbox/filter/optout' }}><MenuItem eventKey='2.4'>Optouts</MenuItem></LinkContainer>
            </NavDropdown>
            <NavItem eventKey={3}><Button bsStyle='default' onClick={this.openSearch.bind(this)}><Glyphicon glyph='search' /> Search</Button></NavItem>
        </Nav>
        <Collapse in={this.state.showSearch}>
          <div>
            <Well>
              <form>
                  <Input type='text' label='From' placeholder='Enter cellphone' />
                  <Input type='text' label='Contains text' placeholder='Enter search term to look for' />
                  <Input type='text' label='Start date' placeholder='Date to start from' />
                  <Input type='text' label='End date' placeholder='Date to search up to' />
                  <Button bsStyle='primary'>Search</Button>
              </form>
            </Well>
          </div>
        </Collapse>
      </div>
    )
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

    const pageheader = this.makeHeader(filter)

    return (
      <div>
        { pageheader }
        <Table responsive striped hover>
          <tbody>
           { nodes }
           {this.props.children}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect(mapStateToProps, messageActions)(MessageList)
