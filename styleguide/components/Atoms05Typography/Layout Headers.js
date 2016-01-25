import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '05.1',
    category: 'Atoms - Typography',
    title: 'Page Headers',
    description: 'A simple shell for an `h1` to appropriately space out and segment sections of content on a page. It can utilize the `h1`’s default small element, as well as most other components (with additional styles).',
    code: `
<PageHeader>Example page header <small>Subtext for header</small></PageHeader>
    `
  }

  render () {
    return (
      <PageHeader>Example page header <small>Optional subtext for header</small></PageHeader>
    )
  }
}
