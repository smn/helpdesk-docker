import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as accountActions } from '../redux/modules/account'
import { Grid, Row, Col, PageHeader, Button, Input } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  forgottonstage: state.account.forgottonstage
})

export class LoginForgottenCodeForm extends Component {
    static propTypes = {
      forgotton: PropTypes.func.isRequired
    };

    render () {
      return (
        <Grid className='text-center'>
          <Row>
            <Col md={6} mdOffset={3}>
            <PageHeader>Enter reset code</PageHeader>
              <p>Please check your cellphone SMS inbox for a code and enter it here.</p>
              <form>
                  <Input type='text' label='Code' placeholder='Enter code' />
                  <Button onClick={() => this.props.forgotton(3)}>Validate code</Button>
              </form>
            </Col>
          </Row>
        </Grid>
      )
    }
}

export default connect(mapStateToProps, accountActions)(LoginForgottenCodeForm)
