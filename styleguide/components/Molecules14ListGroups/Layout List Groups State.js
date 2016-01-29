import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '14.5',
    category: 'Molecules - List Groups',
    title: 'List Groups - State Styled',
    description: 'Set the `active` or `disabled` prop to `true` to mark or disable the item.',
    code: `
<ListGroup>
  <ListGroupItem href="#link1" active>Link 1</ListGroupItem>
  <ListGroupItem href="#link2">Link 2</ListGroupItem>
  <ListGroupItem href="#link3" disabled>Link 3</ListGroupItem>
</ListGroup>
    `
  }


  render () {
    return (
        <ListGroup>
          <ListGroupItem href="#link1" active>Link 1</ListGroupItem>
          <ListGroupItem href="#link2">Link 2</ListGroupItem>
          <ListGroupItem href="#link3" disabled>Link 3</ListGroupItem>
        </ListGroup>
    )
  }
}
