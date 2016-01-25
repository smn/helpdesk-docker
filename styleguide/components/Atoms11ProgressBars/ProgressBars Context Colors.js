import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '11.4',
    category: 'Atoms - Progress Bars',
    title: 'Progress Bars Colored Contextually',
    description: 'Progress bars use some of the same button and alert classes for consistent styles.',
    code: `
<div>
  <ProgressBar bsStyle="success" now={40} />
  <ProgressBar bsStyle="info" now={20} />
  <ProgressBar bsStyle="warning" now={60} />
  <ProgressBar bsStyle="danger" now={80} />
</div>
`
  }

  render () {
    return (
        <div>
          <ProgressBar bsStyle="success" now={40} />
          <ProgressBar bsStyle="info" now={20} />
          <ProgressBar bsStyle="warning" now={60} />
          <ProgressBar bsStyle="danger" now={80} />
        </div>
    )
  }
}
