import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '14.6',
    category: 'Molecules - List Groups',
    title: 'List Groups - Color Styled',
    description: 'Set the `bsStyle` prop to style the item',
    code: `
<ListGroup>
  <ListGroupItem bsStyle="success">Success</ListGroupItem>
  <ListGroupItem bsStyle="info">Info</ListGroupItem>
  <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
  <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
</ListGroup>
    `
  }


  render () {
    return (
        <ListGroup>
          <ListGroupItem bsStyle="success">Success</ListGroupItem>
          <ListGroupItem bsStyle="info">Info</ListGroupItem>
          <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
          <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
        </ListGroup>
    )
  }
}
