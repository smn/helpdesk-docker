import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Label } from 'react-bootstrap';

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
    //
  }

  onStatusChange(state) {
    this.setState(state);
  }

  // loginlogout(){
  //     return this.props.loggedIn ? <NavItem eventKey={2} href="/login">Login</NavItem> : <NavItem eventKey={2} href="/logout">Logout</NavItem>;
  // }
  // { this.loginlogout() }

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Helpdesk</a> <Label>v0.1.0</Label>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={3} href="/faq">FAQ</NavItem>
            <NavItem eventKey={1} href="/inbox">Inbox</NavItem>
            <NavItem eventKey={2} href="/login">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
