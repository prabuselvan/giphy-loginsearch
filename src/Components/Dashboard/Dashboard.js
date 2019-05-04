import React from 'react';
import Search from '../Search';
const Dashboard =(props)=> {
    return (
        <div>
                <Search onSearchHandle={props.onSearchHandle} search={props.search}/>
        </div>
    )
}
export default Dashboard;