import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../../redux/modules/messages'
import { MessageList, Header } from '../../components'
import { Grid, Row, Col, Nav, NavItem, Badge } from 'react-bootstrap'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

const mapStateToProps = (state) => ({
  messages: state.messages.messages
})
export class MessageView extends Component {
    static propTypes = {
      messages: PropTypes.array.isRequired,
      inboxstage: PropTypes.number.isRequired
    };
  render () {
    switch (this.props.inboxstage) {
      case 1:
        return (
          <div className='container text-center'>
            <MessageList />
          </div>)
      default:
        return (
          <div>
            <Header messages_inbox={this.props.messages_inbox} />
            <Grid>
              <Row>
                <Col sm={12} md={12}>
                  <div>
                      <MessageList messages={this.props.messages} />
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        )
    }
  }
}

export default connect(mapStateToProps, messageActions)(InboxView)

// { this.props.children }
