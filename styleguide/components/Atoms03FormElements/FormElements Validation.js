import React, { Component } from 'react'
import { Input } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '03.4',
    category: 'Atoms - Form Elements',
    title: 'Form Elements Validation',
    description: 'Set `bsStyle` to one of `success`, `warning` or `error`. Add `hasFeedback` to show glyphicon. Glyphicon may need additional styling if there is an add-on or no label.',
    code: `
<form>
  <Input type="text" bsStyle="success" label="Success" hasFeedback />
  <Input type="text" bsStyle="warning" label="Warning" hasFeedback />
  <Input type="text" bsStyle="error" label="Error" hasFeedback />
</form>
`
  }

  render () {
    return (
        <form>
          <Input type="text" bsStyle="success" label="Success" hasFeedback />
          <Input type="text" bsStyle="warning" label="Warning" hasFeedback />
          <Input type="text" bsStyle="error" label="Error" hasFeedback />
        </form>
    )
  }
}
