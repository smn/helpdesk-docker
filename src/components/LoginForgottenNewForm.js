import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as accountActions } from '../redux/modules/account'
import { Grid, Row, Col, PageHeader, Button, Input } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  forgottonstage: state.account.forgottonstage
})

export class LoginForgottenNewForm extends Component {
    static propTypes = {
      forgotton: PropTypes.func.isRequired
    };

    render () {
      return (
        <Grid className='text-center'>
          <Row>
            <Col md={6} mdOffset={3}>
              <PageHeader>Enter a new password</PageHeader>
              <p>Your code was valid. Please enter a new memorable password or PIN.</p>
              <form>
                <Input type='password' label='New Password / PIN' />
                <Button onClick={() => this.props.forgotton(0)}>Reset</Button>
              </form>
            </Col>
          </Row>
        </Grid>
      )
    }
}

export default connect(mapStateToProps, accountActions)(LoginForgottenNewForm)
