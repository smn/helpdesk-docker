import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoginForgottenNewForm from '../components/molLoginForgottenNew.jsx';

class LoginForgottenNew extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        success: false
      };
    }

    onStatusChange(state) {
      this.setState(state);
    }

  render() {
    return (
        <Grid className="text-center">
          <Row>
            <Col md={6} mdOffset={3}><LoginForgottenNewForm { ...this.state } /></Col>
          </Row>
        </Grid>
    );
  }
}

export default LoginForgottenNew;
