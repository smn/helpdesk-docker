import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({})

export class HomeView extends React.Component {
  static propTypes = {};

  render () {
    return (
      <Grid>
        <Row>
          <Col sm={12} md={12}>
            <div>
                <h2>Welcome to the helpdesk prototype</h2>
                <ul>
                  <li><Link to='/login'>Login as Senior Operator (full access)</Link></li>
                  <li>Login as Junior Operator (restricted access)</li>
                  <li>Login as Administrator</li>
                </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, {})(HomeView)
