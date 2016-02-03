import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as faqActions } from '../redux/modules/faqs'
import { Faq } from './'
import { Table } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  categories: state.faqs.categories,
  questions: state.faqs.questions,
  results: state.faqs.results
})

export default class FaqCategory extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    results: PropTypes.array.isRequired,
    searchFaq: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  };

  componentDidMount () {
    // this.props.loadFaqs()
  }

  faqId () {
    return parseInt(this.props.params.id, 10)
  }

  getActiveFaq () {
    return this.props.questions[this.faqId()]
  }

  render () {
    const faqs = this.getActiveFaq()
    const hasFaqs = faqs.length > 0
    const nodes = !hasFaqs
      ? <tr><td>There are current no FAQs in this view.</td></tr>
    : faqs.map(faq =>
        <Faq
          key={faq.id}
          faq={faq} />
      )

    return (
      <Table responsive striped hover>
      <thead>
        <tr>
          <th>Question</th><th>Answer</th>
        </tr>
      </thead>
        <tbody>
         { nodes }
         {this.props.children}
        </tbody>
      </Table>
    )
  }
}

export default connect(mapStateToProps, faqActions)(FaqCategory)
