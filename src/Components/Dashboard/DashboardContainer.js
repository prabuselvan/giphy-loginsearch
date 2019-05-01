import React from 'react';
import Dashboard from './Dashboard';
import Header from '../Header';
import './dashboard.css';
class DashboardContainer extends React.Component{ 
    render() {
        return (
            <div className='dashboard'>   
                <Header/>
                <Dashboard/>
            </div>
        )
    }
}
export default DashboardContainer;