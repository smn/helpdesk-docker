import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '14.3',
    category: 'Molecules - List Groups',
    title: 'List Groups',
    description: 'List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.',
    code: `
<ListGroup>
  <ListGroupItem>Item 1</ListGroupItem>
  <ListGroupItem>Item 2</ListGroupItem>
  <ListGroupItem>...</ListGroupItem>
</ListGroup>
    `
  }

  render () {
    return (
        <ListGroup>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>...</ListGroupItem>
        </ListGroup>
    )
  }
}
