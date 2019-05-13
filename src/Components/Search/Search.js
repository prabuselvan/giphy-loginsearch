
import React from 'react';
import SearchLists from './SearchLists';
import  './Search.css';

// import {Input, FormGroup, Container, Col, Label, Form} from 'reactstrap';
const Search = (props)=> {
    const {search} = props;
    // console.log('inside search is ', search);
    return(
        <div>
            
            <h1> Welcome to Dashboard</h1>
            {search.GIFS.map((gif, index)=> (
                // console.log('item ' , item.url , ' index is ', index);
                <SearchLists 
                        key={index} gif={gif}/>
            ))}
        </div>

    )
}
export default Search;