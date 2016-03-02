import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as accountActions } from '../redux/modules/account'
import { Grid, Row, Col, PageHeader, Button, Input, Alert } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  blocked: state.account.blocked,
  loggedIn: state.account.loggedIn,
  forgottonstage: state.account.forgottonstage,
  logged_in_role: state.account.logged_in_role
})

export class LoginForm extends Component {
    static propTypes = {
      history: PropTypes.object.isRequired,
      blocked: PropTypes.bool.isRequired,
      logged_in_role: PropTypes.string.isRequired,
      loggedIn: PropTypes.bool.isRequired,
      login: PropTypes.func.isRequired,
      logout: PropTypes.func.isRequired,
      faillogin: PropTypes.func.isRequired,
      forgotton: PropTypes.func.isRequired,
      children: PropTypes.object.isRequired
    };

    render () {
      console.log(this.props)
      let blocked = this.props.blocked ? <Alert bsStyle='danger'><strong>Login Failed:</strong> Invalid username and/or PIN. Please try again.</Alert> : ''
      return (
        <Grid className='text-center'>
          <Row>
            <Col md={6} mdOffset={3}>
              <PageHeader>Login</PageHeader>
              { blocked }
              <form>
                  <Input type='text' label='Username' placeholder='Enter username' />
                  <Input type='password' placeholder='Enter PIN' label='PIN' />
                  <Link to='/inbox'><Button bsStyle='primary'>Login</Button></Link>{ ' ' }
                  <Button onClick={() => this.props.faillogin()}>Login (Fail)</Button>{ ' ' }
                  <Button onClick={() => this.props.forgotton(1)}>Forgot PIN?</Button>{ ' ' }
              </form>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      )
    }
}

export default connect(mapStateToProps, accountActions)(LoginForm)
