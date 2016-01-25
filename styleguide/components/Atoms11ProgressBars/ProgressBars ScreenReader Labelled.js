import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '11.3',
    category: 'Atoms - Progress Bars',
    title: 'Progress Bars Screenreader Labelled Only',
    description: 'Add a `srOnly` prop to hide the label visually.',
    code: `
<ProgressBar now={60} label="%(percent)s%" srOnly />
`
  }

  render () {
    return (
      <ProgressBar now={60} label="%(percent)s%" srOnly />
    )
  }
}
