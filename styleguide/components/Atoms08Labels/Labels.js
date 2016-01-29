import React, { Component } from 'react'
import { Label } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '08.1',
    category: 'Atoms - Labels',
    title: 'Labels',
    description: 'Create a `<Label>label</Label>` to highlight information',
    code: `
<div>
  <h1>Label <Label>New</Label></h1>
  <h2>Label <Label>New</Label></h2>
  <h3>Label <Label>New</Label></h3>
  <h4>Label <Label>New</Label></h4>
  <h5>Label <Label>New</Label></h5>
  <p>Label <Label>New</Label></p>
</div>
`
  }

  render () {
    return (
        <div>
          <h1>Label <Label>New</Label></h1>
          <h2>Label <Label>New</Label></h2>
          <h3>Label <Label>New</Label></h3>
          <h4>Label <Label>New</Label></h4>
          <h5>Label <Label>New</Label></h5>
          <p>Label <Label>New</Label></p>
        </div>
    )
  }
}
