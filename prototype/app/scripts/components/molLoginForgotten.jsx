import React from 'react';
import { Link } from 'react-router';
import { Input, Button, PageHeader } from 'react-bootstrap';

const LoginForgottenForm = (props) => {
  return (
    <div>
        <PageHeader>Forgotten Password</PageHeader>
        <p>Please enter your cellphone and a reset code will be sent to it.</p>
        <form>
            <Input type="text" label="Username" placeholder="Enter cellphone" />
            <Link to='/loginforgottencode'><Button>Send code to cellphone</Button></Link>
        </form>
    </div>
  )
};

export default LoginForgottenForm;
