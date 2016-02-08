import React, { Component, PropTypes } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class AugmentedDataPod extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  itemClean (item) {
    if (typeof (item) === 'object') {
      return item.join(', ')
    } else {
      return item
    }
  }

  render () {
    const { data } = this.props
    const body = data.data.map(item =>
      <ListGroupItem key={ Object.keys(item)[0] } header={ Object.keys(item)[0] }>
        { this.itemClean(item[Object.keys(item)[0]]) }
      </ListGroupItem>
    )

    return (
      <div>
        <h4>{data.title}</h4>
        <ListGroup>
          { body }
        </ListGroup>
      </div>
    )
  }
}
