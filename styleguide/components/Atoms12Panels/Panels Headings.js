import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '12.2',
    category: 'Atoms - Panels',
    title: 'Panels with Headings',
    description: 'Easily add a heading container to your panel with the `header` prop.',
    code: `

const title = (
  <h3>Panel title</h3>
);

<div>
  <Panel header="Panel heading without title">
    Panel content
  </Panel>
  <Panel header={title}>
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
      <Panel header="Panel heading without title">
        Panel content
      </Panel>
      <Panel header={this.title}>
        Panel content
      </Panel>
    </div>
    )
  }
}
