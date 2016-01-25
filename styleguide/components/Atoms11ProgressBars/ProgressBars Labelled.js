import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '11.2',
    category: 'Atoms - Progress Bars',
    title: 'Progress Bars Labelled',
    description: 'Progress bar, add a `label` prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the labels text is fully visible. The following keys are interpolated with the current values: `%(min)s`, `%(max)s`, `%(now)s`, `%(percent)s`, `%(bsStyle)s`',
    code: `
<ProgressBar now={60} label="%(percent)s%" />
`
  }

  render () {
    return (
      <ProgressBar now={60} label="%(percent)s%" />
    )
  }
}
