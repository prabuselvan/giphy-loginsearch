import { connect } from 'react-redux';
import React from 'react';
import Login from './Login';
import loginAction from './Actions';
import Header from '../Header';

class LoginContainer extends React.Component {
    

    onSubmit=(e)=> {
        e.preventDefault();
        console.log('onSubmit');
        let email = e.target[0].value;
        let pwd = e.target[1].value;
        const details = {
            email, 
            pwd
        }
        // console.log('email and pwd ',email, pwd);
        if (email &&  pwd) {
            this.props.userLogin(details);
        }
    }
    render() {
        // console.log('To access the state directly ',this.props.login.name);
        return(
            <div>
                    <Header/>
                    <Login onSubmit={this.onSubmit}/>

            </div>
        )
    }
}

const mapStateToProps=(state)=> {
    return state;
}
// mapDispatchToProps --> Action Creator
const mapDispatchToProps = {
    userLogin: loginAction.userLogin,
}

export default connect(mapStateToProps,mapDispatchToProps ) (LoginContainer);