import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class FaqListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
  };
  render () {
    const { id, topic } = this.props
    return (
      <tr>
        <td><Link to={`/faqs/faq/${id}`}>{ topic }</Link></td>
      </tr>
    )
  }
}
