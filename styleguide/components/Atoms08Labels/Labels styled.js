import React, { Component } from 'react'
import { Label } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '08.2',
    category: 'Atoms - Labels',
    title: 'Styled Labels',
    description: 'Add any of the below mentioned modifier classes to change the appearance of a label.',
    code: `
<div>
  <Label bsStyle="default">Default</Label>&nbsp;
  <Label bsStyle="primary">Primary</Label>&nbsp;
  <Label bsStyle="success">Success</Label>&nbsp;
  <Label bsStyle="info">Info</Label>&nbsp;
  <Label bsStyle="warning">Warning</Label>&nbsp;
  <Label bsStyle="danger">Danger</Label>
</div>
`
  }

  render () {
    return (
        <div>
          <Label bsStyle="default">Default</Label>&nbsp;
          <Label bsStyle="primary">Primary</Label>&nbsp;
          <Label bsStyle="success">Success</Label>&nbsp;
          <Label bsStyle="info">Info</Label>&nbsp;
          <Label bsStyle="warning">Warning</Label>&nbsp;
          <Label bsStyle="danger">Danger</Label>
        </div>
    )
  }
}
