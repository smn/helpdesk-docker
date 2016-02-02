import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, Label, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  cases: state.cases.cases
})
export default class Header extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    cases: PropTypes.array.isRequired
  };
  render () {
    const { messages, cases } = this.props

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Helpdesk</a> <Label>v0.1.5</Label>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={4} href='/faq'>FAQ</NavItem>
            <LinkContainer to={{ pathname: '/inbox' }}>
              <NavItem eventKey={1}>Inbox <Badge>{ messages.length }</Badge></NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/cases' }}>
              <NavItem eventKey={2}>Cases <Badge>{ cases.length }</Badge></NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/inbox/filter/archive' }}>
              <NavItem eventKey={3}>Archive</NavItem>
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
