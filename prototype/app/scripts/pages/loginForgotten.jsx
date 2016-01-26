import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoginForgottenForm from '../components/molLoginForgotten.jsx';

class LoginForgotten extends React.Component {

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
            <Col md={6} mdOffset={3}><LoginForgottenForm { ...this.state } /></Col>
          </Row>
        </Grid>
    );
  }
}

export default LoginForgotten;
