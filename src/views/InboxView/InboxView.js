import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../../redux/modules/messages'
import { MessageList } from '../../components'
import { Grid, Row, Col, Nav, NavItem, Badge } from 'react-bootstrap'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  inboxstage: state.messages.inboxstage
})
export class InboxView extends Component {
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
          <Grid>
            <Row>
              <Col sm={4} md={3}>
                <Nav bsStyle='pills' stacked activeKey={1} onSelect={this.handleSelect}>
                  <NavItem eventKey={1}>Messages Inbox <Badge>{ this.props.messages.length }</Badge></NavItem>
                  <NavItem eventKey={2}>Open Cases<Badge>0</Badge></NavItem>
                  <NavItem eventKey={3}>Archive</NavItem>
                </Nav>
              </Col>
              <Col sm={8} md={9}>
                <div>
                    <MessageList messages={this.props.messages} />
                </div>
              </Col>
            </Row>
          </Grid>
        )
    }
  }
}

export default connect(mapStateToProps, messageActions)(InboxView)

// { this.props.children }
