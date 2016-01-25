import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '14.4',
    category: 'Molecules - List Groups',
    title: 'List Groups - Linked',
    description: 'Set the `href` or `onClick` prop on `ListGroupItem`, to create a linked or clickable element.',
    code: `
<ListGroup>
  <ListGroupItem href="#link1">Link 1</ListGroupItem>
  <ListGroupItem href="#link2">Link 2</ListGroupItem>
  <ListGroupItem onClick={this.alertClicked}>
    Trigger an alert
  </ListGroupItem>
</ListGroup>
    `
  }

  alertClicked() {
    alert('You clicked the third ListGroupItem');
  }

  render () {
    return (
        <ListGroup>
            <ListGroupItem href="#link1">Link 1</ListGroupItem>
            <ListGroupItem href="#link2">Link 2</ListGroupItem>
            <ListGroupItem onClick={this.alertClicked}>
              Trigger an alert
            </ListGroupItem>
          </ListGroup>
    )
  }
}
