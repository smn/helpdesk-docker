import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as faqActions } from '../redux/modules/faqs'
import { FaqListItem, CaseCreateForm } from './'
import { Table } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  categories: state.faqs.categories,
  results: state.faqs.results
})

export default class FaqList extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    results: PropTypes.array.isRequired,
    searchFaq: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
  };

  componentDidMount () {
    // this.props.loadFaqs()
  }

  getFaqs (filter) {
    // if (filter === 'archive') {
    //   return this.props.faqs_archived
    // } else {
    return this.props.categories
    // }
  }

  render () {
    const filter = this.props.params.filter
    const faqs = this.getFaqs(filter)
    const hasFaqs = faqs.length > 0
    const nodes = !hasFaqs
      ? <tr><td>There are current no FAQs in this view.</td></tr>
    : faqs.map(faq =>
        <FaqListItem
          key={faq.id}
          id={faq.id}
          topic={faq.topic} />
      )

    return (
      <div>
        Create <CaseCreateForm />
        <Table responsive striped hover>
          <tbody>
           { nodes }
           {this.props.children}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect(mapStateToProps, faqActions)(FaqList)
