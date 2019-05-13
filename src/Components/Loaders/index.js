import React from 'react';
import Loader from 'react-loader-spinner';
import './loaders.css';
const Loaders= (props)=> {
    return (
        <div className='loading'>
            {props.isLoading &&   <Loader  type="Puff"
                         color="#00BFFF"
                         height="100"	
                         width="100"/>}
              
        </div>
    )
}
export default Loaders;