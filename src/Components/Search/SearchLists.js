import React from 'react';
import  './Search.css';
const SearchLists =(props)=> {
    // console.log('Search Lists ',props.items);
    const  {gif} = props;

    console.log('items are ', gif.images.fixed_height.url);
    return (
        <div className='container-parent'>
            <div className='container-child1'>
                  <h6> {gif.title}</h6>
                  <img className='flex-fill' src={gif.images.original.webp}/>

            </div>
                
        </div>
        
    )
}
export default SearchLists;