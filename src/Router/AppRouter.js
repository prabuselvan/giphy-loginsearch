import React from 'react';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginContainer from '../Components/Login/LoginContainer';
import DashboardContainer from '../Components/Dashboard/DashboardContainer';
import PrivateRouter from './PrivateRouter';
const AppRouter = (props)=> {
    // console.log('app router is ', props);
    return(
        <div>
            <BrowserRouter>
                <Route exact path='/' component ={LoginContainer}/> 
                <PrivateRouter path='/dashboard' component={DashboardContainer}/>

            </BrowserRouter>
        </div>
    )
};

export default AppRouter;