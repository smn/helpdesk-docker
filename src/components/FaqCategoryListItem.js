import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class FaqCategoryListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired
  };
  render () {
    const { id, topic } = this.props
    return (
      <tr>
        <td><Link to={`/faqs/category/${id}`}>{ topic }</Link></td>
      </tr>
    )
  }
}
