import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '12.3',
    category: 'Atoms - Panels',
    title: 'Panels with contextual colors',
    description: 'Like other components, easily make a panel more meaningful to a particular context by adding a `bsStyle` prop.',
    code: `
<div>
  <Panel header={title}>
    Panel content
  </Panel>

  <Panel header={title} bsStyle="primary">
    Panel content
  </Panel>

  <Panel header={title} bsStyle="success">
    Panel content
  </Panel>

  <Panel header={title} bsStyle="info">
    Panel content
  </Panel>

  <Panel header={title} bsStyle="warning">
    Panel content
  </Panel>

  <Panel header={title} bsStyle="danger">
    Panel content
  </Panel>
</div>
`
  }

  title = (
    <h3>Panel title</h3>
  )

  render () {
    return (
        <div>
          <Panel header={this.title}>
            Panel content
          </Panel>

          <Panel header={this.title} bsStyle="primary">
            Panel content
          </Panel>

          <Panel header={this.title} bsStyle="success">
            Panel content
          </Panel>

          <Panel header={this.title} bsStyle="info">
            Panel content
          </Panel>

          <Panel header={this.title} bsStyle="warning">
            Panel content
          </Panel>

          <Panel header={this.title} bsStyle="danger">
            Panel content
          </Panel>
        </div>
    )
  }
}
