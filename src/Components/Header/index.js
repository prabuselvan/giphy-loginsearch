import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {NavLink} from 'react-router-dom';
const Header =()=> {
    return (
        <div>
            <Navbar  color='dark' light>
                <NavbarBrand href="/" style={{color: 'white'}}> Giphy Search App</NavbarBrand>
                
            </Navbar>

    </div>
)
}

export default Header;