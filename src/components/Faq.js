import React, { Component, PropTypes } from 'react'

export default class Faq extends Component {
  static propTypes = {
    faq: PropTypes.object.isRequired
  };
  render () {
    const { faq } = this.props
    return (
      <tr>
        <td>{ faq.question }</td>
        <td>{ faq.answer }</td>
      </tr>
    )
  }
}
