import React from 'react';
import  './Search.css';
import {Input, FormGroup, Container, Col, Label, Form} from 'reactstrap';
const Search = ()=> {
    return(
        <div>
            <Container>
            

               
                 <FormGroup row>
                        <Label sm={2}> Search </Label>
                        <Col>
                          <Input className= 'searchbox' sm={5} placeholder='Enter GIF Name'/>
                        </Col>
                 </FormGroup>
           
            </Container>
        </div>
    )
}

export default Search;