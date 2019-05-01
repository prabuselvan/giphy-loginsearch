import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRouter= ({component: Component, ...rest})=> {
    const isUserAuthenticated= true;
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