import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as accountActions } from '../redux/modules/account'
import { Grid, Row, Col, PageHeader, Button, Input } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  forgottonstage: state.account.forgottonstage
})

export class LoginForgottenForm extends Component {
    static propTypes = {
      forgotton: PropTypes.func.isRequired
    };

    render () {
      return (
        <Grid className='text-center'>
          <Row>
            <Col md={6} mdOffset={3}>
            <PageHeader>PIN Recovery</PageHeader>
              <p>Please enter your username and a reset code will be sent to you.</p>
              <form>
                  <Input type='text' label='Username' placeholder='Enter username' />
                  <Button onClick={() => this.props.forgotton(2)}>Send code</Button>
              </form>
            </Col>
          </Row>
        </Grid>
      )
    }
}

export default connect(mapStateToProps, accountActions)(LoginForgottenForm)
