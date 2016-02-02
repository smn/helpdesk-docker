import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../redux/modules/messages'
import { Table, Input, ButtonInput, Button } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  messages_archived: state.messages.messages_archived,
  messages_deleted: state.messages.messages_deleted,
  inboxstage: state.messages.inboxstage
})

export default class Message extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
  };

  componentDidMount() {
    // from the path `/inbox/messages/:id`
    const id = this.props.params.id
    console.log('MESSAGE MOUNTED:')
    console.log(id)
    // fetchMessage(id, function (err, message) {
    //   this.setState({ message: message })
    // })
  }

  render () {
    const messages = this.props.messages.filter(x => x.id == this.props.params.id)
    const hasMessages = messages.length > 0
    const searchFaqButton = <Button>Search approved answers</Button>
    const replyForm = (
      <div>
        <form>
          <Input type="textarea" label="Reply" placeholder="textarea" />
        </form>
        <form className="form-inline">
          <ButtonInput bsStyle="primary" type="submit" value="Reply" /> <Input type="text" buttonAfter={searchFaqButton} />
        </form>
      </div>
    )
    if (!hasMessages) {
      return (
          <h1>Message not found</h1>
        )
    } else {
      const message = messages[0]
      return (
        <div>
          <h1>Message from { message.from }</h1>
          <Table>
            <thead>
              <tr>
                <th>Message</th><th width='300px'>Message Details</th>
              </tr>
            </thead>
            <tbody>
              <tr key={message.id}>
                <td>
                  { message.message } <hr />
                  { replyForm }
                </td>
                <td>
                  <strong>Recieved: </strong>{ message.received_at }
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, messageActions)(Message)
