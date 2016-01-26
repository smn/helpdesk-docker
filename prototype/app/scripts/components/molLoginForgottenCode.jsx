import React from 'react';
import { Link } from 'react-router';
import { Input, Button, PageHeader } from 'react-bootstrap';

const LoginForgottenCodeForm = (props) => {
  return (
    <div>
        <PageHeader>Enter reset code</PageHeader>
        <p>Please check your cellphone SMS inbox for a code and enter it here.</p>
        <form>
            <Input type="text" label="Code" placeholder="Enter code" />
            <Link to='/loginforgottennew'><Button>Validate code</Button></Link>
        </form>
    </div>
  )
};

export default LoginForgottenCodeForm;
