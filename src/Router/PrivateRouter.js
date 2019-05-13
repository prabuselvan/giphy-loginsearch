import  cookies  from 'js-cookie';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';



const PrivateRouter= ({component: Component, ...rest})=> {
    // console.log('privateRouter accessing props ',...rest);
    // const isUserAuthenticated= props.login.userName;
    const isUserAuthenticated =cookies.get('loggedinUser');
    console.log('Authenticated user is ', isUserAuthenticated);
    return(
        <div>
            <Route
               {...rest}
               render={props=> (
                //    console.log('props ', props);
                    isUserAuthenticated ? <Component {...props}/> : <Redirect to='/'/>
               )}/>

        </div>
    )
}

export default PrivateRouter;