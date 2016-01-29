import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '11.1',
    category: 'Atoms - Progress Bars',
    title: 'Progress Bars',
    description: 'Default progress bar, using `now` to set percentage done',
    code: `
<ProgressBar now={60} />
`
  }

  render () {
    return (
      <ProgressBar now={60} />
    )
  }
}
