import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as faqActions } from '../redux/modules/faqs'
import { actions as messageActions } from '../redux/modules/messages'
import { Modal, Button, Accordion, Panel } from 'react-bootstrap'
// import { FaqModalPicker } from './'

const mapStateToProps = (state) => ({
  categories: state.faqs.categories,
  questions: state.faqs.questions,
  results: state.faqs.results
})

class FaqModal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      showModal: false
    }
  }
  static propTypes = {
    categories: PropTypes.array.isRequired,
    questions: PropTypes.object.isRequired,
    results: PropTypes.array.isRequired,
    messageId: PropTypes.number.isRequired,
    showModal: PropTypes.func.isRequired,
    addReply: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
    closeSuccess: PropTypes.func.isRequired
  };

  closeModal () {
    this.setState({ showModal: false })
  }

  openModal () {
    this.setState({ showModal: true })
  }

  getQuestions (questions, qid) {
    return questions[qid.toString()]
  }

  handleSetMessage (msg) {
    this.props.addReply({id: this.props.messageId, text: msg})
    this.closeModal()
    setTimeout(() => this.props.closeSuccess(), 5000)
  }

  render () {
    const questions = this.getQuestions(this.props.questions, 903)
    const panels = questions.map(question =>
      <Panel header={ question.question } key={ question.id } eventKey={ question.id.toString() }>
        { question.answer }<br />
      <Button onClick={() => this.handleSetMessage(question.answer)}>Use as response</Button>
      </Panel>)
    const body = (
      <Accordion>
        { panels }
      </Accordion>
    )

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
  addReply: PropTypes.func.isRequired,
  closeSuccess: PropTypes.func.isRequired,
  messageId: PropTypes.number.isRequired,
  children: PropTypes.object.isRequired
}

const messageAndFaqActions = Object.assign({}, messageActions, faqActions)

export default connect(mapStateToProps, messageAndFaqActions)(FaqModal)

// export default FaqModal
