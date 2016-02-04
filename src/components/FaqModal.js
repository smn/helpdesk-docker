import React, { Component, PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaqModalPicker } from './'

class FaqModal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      showModal: false,
      body: 'categories'
    }
  }

  componentDidMount () {
    // from the path `/inbox/messages/:id`
    // this.setState({ body: 'WOrd' })
  }

  closeModal () {
    this.setState({ showModal: false })
  }

  openModal () {
    this.setState({ showModal: true })
  }

  render () {
     // const { showModal, body } = this.props
    let body
    if (this.state.body === 'categories') {
      body = <FaqModalPicker />
    } else {
      body = <h3>What up?</h3>
    }

    return (
      <div>
        <p><Button
          bsStyle='primary'
          onClick={() => this.openModal()}
        >
          Use approved response
        </Button></p>

        <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
          <Modal.Header>
            <Modal.Title>Browse FAQs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { body }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.closeModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
        {this.props.children}
      </div>
    )
  }
}

FaqModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
}

export default FaqModal
