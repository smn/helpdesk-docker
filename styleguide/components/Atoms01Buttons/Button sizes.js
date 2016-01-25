import React, { Component } from 'react'
import { ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '01.2',
    category: 'Atoms - Buttons',
    title: 'Button sizes',
    description: 'You can use any of the available button size types to quickly create a larger button. Instead of applying button sizing props to every button in a group, just add `bsSize` prop to the <ButtonGroup />.',
    code: `
<ButtonToolbar>
  <ButtonGroup bsSize="large">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
</ButtonToolbar>

<ButtonToolbar>
  <ButtonGroup>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
</ButtonToolbar>

<ButtonToolbar>
  <ButtonGroup bsSize="small">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
</ButtonToolbar>

<ButtonToolbar>
  <ButtonGroup bsSize="xsmall">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
</ButtonToolbar>
    `
  }

  render () {
    return (
        <div>
      <ButtonToolbar>
        <ButtonGroup bsSize="large">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup bsSize="small">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup bsSize="xsmall">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
    )
  }
}
