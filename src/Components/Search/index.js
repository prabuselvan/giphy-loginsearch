import React from 'react';
import  './Search.css';
// import {Input, FormGroup, Container, Col, Label, Form} from 'reactstrap';
const Search = (props)=> {
    const {search} = props;
    console.log('search is ', search);
    return(
        <div>
            <h1> Welcome to Dashboard</h1>
            {search.map(search=> { console.log(search)})}
        </div>
    
    )
}

export default Search;