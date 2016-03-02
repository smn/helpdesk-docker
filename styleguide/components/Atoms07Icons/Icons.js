import React, { Component } from 'react'
import { Button, ButtonToolbar, ButtonGroup, Glyphicon } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '07.1',
    category: 'Atoms - Icons',
    title: 'Icons',
    description: 'Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.',
    code: `
<div>
  <ButtonToolbar>
    <ButtonGroup>
      <Button><Glyphicon glyph="align-left" /></Button>
      <Button><Glyphicon glyph="align-center" /></Button>
      <Button><Glyphicon glyph="align-right" /></Button>
      <Button><Glyphicon glyph="align-justify" /></Button>
    </ButtonGroup>
  </ButtonToolbar>
  <ButtonToolbar>
    <ButtonGroup>
      <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
      <Button><Glyphicon glyph="star" /> Star</Button>
      <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
      <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
    </ButtonGroup>
  </ButtonToolbar>
</div>
`
  }

  render () {
    return (
        <div>
          <ButtonToolbar>
            <ButtonGroup>
              <Button><Glyphicon glyph="align-left" /></Button>
              <Button><Glyphicon glyph="align-center" /></Button>
              <Button><Glyphicon glyph="align-right" /></Button>
              <Button><Glyphicon glyph="align-justify" /></Button>
            </ButtonGroup>
          </ButtonToolbar>
          <ButtonToolbar>
            <ButtonGroup>
              <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
              <Button><Glyphicon glyph="star" /> Star</Button>
              <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
              <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
    )
  }
}
