import React from 'react';
import { Input, Button, Form, FormGroup, Label, Col, Navbar, NavbarBrand } from 'reactstrap';
import './login.css';
const Login=(props)=> {
    console.log('props ', props);
  
    return (
        <div>
             <Form className='loginForm' onSubmit={props.onSubmit}>
                <FormGroup row>
                        <Label sm={2}> Email  </Label>
                    <Col>
                        <Input sm={5} type='email' placeholder='Email' onChange={props.onHandleEmailChange} value={props.uname} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                        <Label sm={2}> Password </Label>
                    <Col>
                        <Input sm={5} type='password' placeholder='Password' onChange={props.onHandlePwdChange} value={props.password} />     
                    </Col>
                </FormGroup>
          
                    <Button className='float-right' color='btn btn-primary' disabled={props.button}> Login </Button>
            </Form>

            {/* {delayError()} */}
           
            { props.message ? <div className='alert alert-danger err' > {props.message}</div> : null}
        </div>
    )
}

export default Login;