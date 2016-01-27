import React from 'react';
import MessageList from '../components/messageList.jsx';
import MessageStore from '../stores/messageStore';
import MessageActions from '../actions/messageActions';
import { Grid, Row, Col, Nav, NavItem, Badge } from 'react-bootstrap';

class Inbox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      messages : [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = MessageStore.listen(this.onStatusChange.bind(this));
    MessageActions.loadMessages();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
    return (
        <Grid>
          <Row>
            <Col sm={4} md={3}>
              <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
                <NavItem eventKey={1}>Messages Inbox <Badge>3</Badge></NavItem>
                <NavItem eventKey={2}>Open Cases<Badge>0</Badge></NavItem>
                <NavItem eventKey={3}>Archive</NavItem>
              </Nav>
            </Col>
            <Col sm={8} md={9}>
                <MessageList { ...this.state } />
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default Inbox;
