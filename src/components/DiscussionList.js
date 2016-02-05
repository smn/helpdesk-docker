import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as internalmessageActions } from '../redux/modules/internalmessages'
import { DiscussionListItem } from './'
import { Table, Input } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  internalmessages: state.internalmessages.internalmessages,
  internalmessages_pinned: state.internalmessages.internalmessages_pinned,
  internalmessages_normal: state.internalmessages.internalmessages_normal
})

export default class DiscussionList extends Component {
  static propTypes = {
    internalmessages: PropTypes.object.isRequired,
    internalmessages_normal: PropTypes.array.isRequired,
    internalmessages_pinned: PropTypes.array.isRequired,
    addInternalMessage: PropTypes.func.isRequired,
    pinMessage: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  };

  componentDidMount () {
    // this.props.loadFaqs()
  }

  handleMessageSubmit (e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.handleMessageSave(text)
      e.target.value = ''
      this.setState({ text: '' })
      e.target.blur()
    }
  }

  handleMessageChange (e) {
    this.setState({ text: e.target.value })
  }

  handleMessageSave (text) {
    if (text.length !== 0) {
      const messageId = Date.now()
      this.props.addInternalMessage({id: messageId, body: text, from: 'You', pinned: false})
    }
  }



  render () {
    const hasMessages = Object.keys(this.props.internalmessages).length > 0
    const header = !hasMessages
      ? <tr><td>There are current no messages in this view.</td></tr>
      : null
    const pinned = this.props.internalmessages_pinned.map(message =>
        <DiscussionListItem
          key={message}
          message={this.props.internalmessages[message]}
          onDiscussionPinClicked={this.props.pinMessage} />
      )
    const normal = this.props.internalmessages_normal.map(message =>
        <DiscussionListItem
          key={message}
          message={this.props.internalmessages[message]}
          onDiscussionPinClicked={this.props.pinMessage} />
      )
    const newMessageForm = (
      <form>
        <Input type='text' label='Add a message' placeholder='Enter a short message to share with your colleages. Press enter to add it.'
          onChange={this.handleMessageChange.bind(this)}
          onKeyDown={this.handleMessageSubmit.bind(this)} />
      </form>
    )

    return (
      <div>
        { newMessageForm }
        <Table responsive striped hover>
          <tbody>
           { header }
           { pinned }
           { normal }
           {this.props.children}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect(mapStateToProps, internalmessageActions)(DiscussionList)
