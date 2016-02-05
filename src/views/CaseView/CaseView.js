import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as messageActions } from '../../redux/modules/messages'
import { actions as caseActions } from '../../redux/modules/cases'
import { Header } from '../../components'
import { Grid, Row, Col } from 'react-bootstrap'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

const mapStateToProps = (state) => ({
  messages_inbox: state.messages.messages_inbox,
  cases_open: state.cases.cases_open
})
export class CaseView extends Component {
    static propTypes = {
      messages_inbox: PropTypes.array.isRequired,
      cases_open: PropTypes.array.isRequired,
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

const messageAndCaseActions = Object.assign({}, messageActions, caseActions)

export default connect(mapStateToProps, messageAndCaseActions)(CaseView)
