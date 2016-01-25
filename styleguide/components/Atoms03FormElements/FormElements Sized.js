import React, { Component } from 'react'
import { Input } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '03.3',
    category: 'Atoms - Form Elements',
    title: 'Form Elements Sized',
    description: 'Use `bsSize` to change the size of inputs. It also works with addons and most other options.',
    code: `
<form>
  <Input type="text" bsSize="large" placeholder="Large text" />
  <Input type="text" bsSize="medium" placeholder="Normal text" />
  <Input type="text" bsSize="small" placeholder="Small text" />
</form>
`
  }

  render () {
    return (
        <form>
          <Input type="text" bsSize="large" placeholder="Large text" />
          <Input type="text" bsSize="medium" placeholder="Normal text" />
          <Input type="text" bsSize="small" placeholder="Small text" />
        </form>
    )
  }
}
