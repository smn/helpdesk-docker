import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as faqActions } from '../../redux/modules/faqs'
import { Header } from '../../components'
import { Grid, Row, Col } from 'react-bootstrap'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

const mapStateToProps = (state) => ({
  categories: state.faqs.categories,
  results: state.faqs.results
})
export class FaqView extends Component {
    static propTypes = {
      categories: PropTypes.array.isRequired,
      results: PropTypes.array.isRequired,
      children: PropTypes.object.isRequired
    };
  render () {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col sm={12} md={12}>
              <div>
                  {/* Render the child route component */}
                  {this.props.children}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps, faqActions)(FaqView)
