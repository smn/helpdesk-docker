import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as accountActions } from '../../redux/modules/account'
import { Grid, Row, Col, Button } from 'react-bootstrap'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({})

export class HomeView extends Component {
  static propTypes = {
    setUserRole: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  handleSetUserRole (role) {
    this.props.setUserRole(role)
    if (role === 'admin') {
      this.props.history.push('/admin')
    } else {
      this.props.history.push('/login')
    }
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col sm={12} md={12}>
            <div>
                <h2>Welcome to the helpdesk prototype</h2>
                <ul>
                  <li><Button onClick={() => this.handleSetUserRole('seniorop')}>Login as Senior Operator</Button> (full access)</li>
                  <li><Button onClick={() => this.handleSetUserRole('juniorop')}>Login as Junior Operator</Button>  (restricted access)</li>
                  <li><Button onClick={() => this.handleSetUserRole('admin')}>Login as Administrator</Button></li>
                </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, accountActions)(HomeView)
