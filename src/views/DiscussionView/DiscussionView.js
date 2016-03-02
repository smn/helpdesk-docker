import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as internalmessageActions } from '../../redux/modules/internalmessages'
import { Header, DiscussionList } from '../../components'
import { Grid, Row, Col } from 'react-bootstrap'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

const mapStateToProps = (state) => ({
})
export class DiscussionView extends Component {
  static propTypes = {
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
                  <DiscussionList />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps, internalmessageActions)(DiscussionView)
