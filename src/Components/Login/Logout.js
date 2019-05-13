import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import loginAction from './Actions';

class Logout extends React.Component {

    onClick=()=> {
        this.props.history.push('/');
        this.props.logout()

    }
    render() {
        return (
            <div>
                <NavLink to='/' className='float-right' onClick={this.onClick}>  Logout </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchToProps= {
    logout : loginAction.userLogout
}

export default connect(mapStateToProps, mapDispatchToProps)  (Logout);