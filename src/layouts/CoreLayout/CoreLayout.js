import React, { PropTypes } from 'react'
import { Navbar, Nav, NavItem, Label } from 'react-bootstrap'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout ({ children }) {
  return (
    <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Helpdesk</a> <Label>v0.1.1</Label>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={3} href='/faq'>FAQ</NavItem>
            <NavItem eventKey={1} href='/inbox'>Inbox</NavItem>
            <NavItem eventKey={2} href='/login'>Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        {children}
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
