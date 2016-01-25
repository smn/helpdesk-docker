import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '10.1',
    category: 'Atoms - Alerts',
    title: 'Alerts',
    description: 'Basic alert styles using `bgStyle` for type.',
    code: `
<Alert bsStyle="warning">
  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
</Alert>
`
  }

  render () {
    return (
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you are not looking too good.
        </Alert>
    )
  }
}
