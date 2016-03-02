import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, Label } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class HeaderAdmin extends Component {
  render () {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a className='navbar-brand' style={{ paddingTop: 2 + 'px' }} href='/'>Helpdesk</a> <Label>v0.1.18</Label>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/admin/organisations' }}>
              <NavItem eventKey={1}>Organisations</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/admin/users' }}>
              <NavItem eventKey={2}>Users</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/admin/responses' }}>
              <NavItem eventKey={3}>Auto Responses</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
//
// export default connect(mapStateToProps, {})(HeaderAdmin)
