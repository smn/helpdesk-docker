import React, { Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '01.1',
    category: 'Atoms - Buttons',
    title: 'Buttons',
    description: 'You can use any of the available button style types to quickly create a styled button. Just modify the `bsStyle` prop.',
    code: `
<ButtonToolbar>
  <Button>Default</Button>
  <Button bsStyle='primary'>Primary</Button>
  <Button bsStyle='success'>Success</Button>
  <Button bsStyle='info'>Info</Button>
  <Button bsStyle='warning'>Warning</Button>
  <Button bsStyle='danger'>Danger</Button>
  <Button bsStyle='link'>Link</Button>
</ButtonToolbar>
    `
  }

  render () {
    return (
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle='primary'>Primary</Button>
        <Button bsStyle='success'>Success</Button>
        <Button bsStyle='info'>Info</Button>
        <Button bsStyle='warning'>Warning</Button>
        <Button bsStyle='danger'>Danger</Button>
        <Button bsStyle='link'>Link</Button>
      </ButtonToolbar>
    )
  }
}
