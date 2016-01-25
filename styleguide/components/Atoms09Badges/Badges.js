import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '09.1',
    category: 'Atoms - Badges',
    title: 'Badges',
    description: 'Easily highlight new or unread items by adding a `<Badge>` to links, navs, and more.',
    code: `
Badges <Badge>42</Badge>
`
  }

  render () {
    return (
      <p>Badges <Badge>42</Badge></p>
    )
  }
}
