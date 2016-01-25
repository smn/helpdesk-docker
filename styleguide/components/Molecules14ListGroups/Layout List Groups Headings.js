import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '14.7',
    category: 'Molecules - List Groups',
    title: 'List Groups - Headings',
    description: 'Set the `header` prop to create a structured item, with a heading and a body area.',
    code: `
<ListGroup>
  <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
  <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
  <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
</ListGroup>
    `
  }


  render () {
    return (
        <ListGroup>
          <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
          <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
          <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
        </ListGroup>
    )
  }
}
