import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, Label, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const mapStateToProps = (state) => ({
  messages_inbox: state.messages.messages_inbox,
  cases: state.cases.cases
})
export default class Header extends Component {
  static propTypes = {
    messages_inbox: PropTypes.object.isRequired,
    cases: PropTypes.array.isRequired
  };
  render () {
    const { messages_inbox, cases } = this.props

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a className='navbar-brand' style={{ paddingTop: 2 + 'px' }} href='/'>Helpdesk</a> <Label>v0.1.10</Label>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/inbox' }}>
              <NavItem eventKey={1}>Inbox <Badge>{ messages_inbox.length }</Badge></NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/cases' }}>
              <NavItem eventKey={2}>Cases <Badge>{ cases.length }</Badge></NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/inbox/filter/archived' }}>
              <NavItem eventKey={3}>Archive</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/faqs' }}>
              <NavItem eventKey={4}>FAQ</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/login' }}>
              <NavItem eventKey={5}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default connect(mapStateToProps, {})(Header)
