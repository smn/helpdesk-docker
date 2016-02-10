import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Grid, Row, Col, PageHeader, Panel } from 'react-bootstrap'

const mapStateToProps = (state) => ({
})

export class AdminChooser extends Component {
    static propTypes = {
      history: PropTypes.object.isRequired
    };

    render () {
      return (
        <Grid className='text-center'>
          <Row>
            <Col md={6} mdOffset={3}>
              <PageHeader>Admin</PageHeader>
              <div>
                <Panel header='Organisations'>
                  <Link to={`/admin/organisations`}>Manage Organisations</Link><br />
                  <Link to={`/admin/organisations/create`}>Add Organisation</Link>
                </Panel>
                <Panel header='Users'>
                  <Link to={`/admin/users`}>Manage Users ***</Link><br />
                  <Link to={`/admin/users/create`}>Add User</Link>
                </Panel>
                <Panel header='Auto Responses'>
                  <Link to={`/admin/responses`}>Manage Responses</Link><br />
                  <Link to={`/admin/responses/create`}>Add Response</Link>
                </Panel>
              </div>
            </Col>
          </Row>
        </Grid>
      )
    }
}

export default connect(mapStateToProps, {})(AdminChooser)
