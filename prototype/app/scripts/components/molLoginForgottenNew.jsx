import React from 'react';
import { Link } from 'react-router';
import { Input, Button, PageHeader } from 'react-bootstrap';

const LoginForgottenNewForm = (props) => {
  return (
    <div>
        <PageHeader>Enter a new password</PageHeader>
        <p>Your code was valid. Please enter a new memorable password or PIN.</p>
        <form>
            <Input type="password" label="New Password / PIN" />
            <Link to='/login'><Button>Reset</Button></Link>
        </form>
    </div>
  )
};

export default LoginForgottenNewForm;
