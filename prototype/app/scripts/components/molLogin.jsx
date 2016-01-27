import React from 'react';
import { Link } from 'react-router';
import { Input, ButtonInput, PageHeader, Button, Alert } from 'react-bootstrap';

const LoginForm = (props) => {

  let invalid = props.invalid ? <Alert bsStyle="danger"><strong>Login Failed:</strong> Please try again.</Alert> : '';

  return (
    <div>
        <PageHeader>Login</PageHeader>
        {invalid}
        <form>
            <Input type="text" label="Username" placeholder="Enter cellphone" />
            <Input type="password" label="Password / PIN" />
            <Link to='/inbox'><Button>Login</Button></Link> 
            <Link to='/loginfail'><Button>Login (Fail)</Button></Link>
            <Link to='/loginforgotten'><Button>Forgotton Password</Button></Link>
        </form>
    </div>
  )
};

LoginForm.propTypes = {
  invalid : React.PropTypes.bool
}

export default LoginForm;
