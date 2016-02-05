import React, { Component, PropTypes } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class AugmentedDataPod extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render () {
    const { data } = this.props
    const body = data.data.map(item =>
      <ListGroupItem header={ Object.keys(item)[0] }>
        { item[Object.keys(item)[0]] }
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
