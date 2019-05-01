import React from 'react';
import { Input, Button, Form, FormGroup, Label, Col, Navbar, NavbarBrand } from 'reactstrap';
import './login.css';
const Login=(props)=> {
    // console.log('props ', props);
    return (
        <div>
           
            <Form className='loginForm' onSubmit={props.onSubmit}>
                <FormGroup row>
                        <Label sm={2}> Email  </Label>
                    <Col>
                        <Input sm={5} type='email' placeholder='Email'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                        <Label sm={2}> Password </Label>
                    <Col>
                        <Input sm={5} placeholder='Password'/>     
                    </Col>
                </FormGroup>
          
                    <Button className='float-right' color='btn btn-primary'> Login </Button>
            
            </Form>
            
        </div>
    )
}

export default Login;