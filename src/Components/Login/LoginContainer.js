import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import Login from './Login';
import loginAction from './Actions';
import Header from '../Header';

class LoginContainer extends React.Component {
    state= {
        uname :'',
        password: '',
        button: true
    }

    onSubmit=(e)=> {
        e.preventDefault();
        console.log('onSubmit');
        const {uname,password} = this.state;


        const details = {
            uname, 
            password
        }

        if (uname &&  password) {
            this.props.userLogin(details);
            this.setState({
                uname: '',
                password: ''
            })
        }
    }

    onHandleEmailChange=(e)=> {
        // console.log('onchange ',e.target.value);
        const {uname} = this.state;
        this.setState( {
            uname: e.target.value
        });

    
    }

    onHandlePwdChange= (e)=> {
        const  {uname, password, button} = this.state;
        this.setState({
            password : e.target.value
        },()=> {
            if(uname && password) {
                this.setState({
                    button: false
                })
            }
        })

      
    }

    render() {
        console.log('To access the state directly ',this.props.login.userName);
        return this.props.login.userName ? <Redirect to='/dashboard'/>:(
            <div>
                    <Header/>
                    <Login 
                            onSubmit={this.onSubmit} 
                            message={this.props.login.message}
                            onHandleEmailChange={this.onHandleEmailChange}
                            uname={this.state.uname}
                            onHandlePwdChange={this.onHandlePwdChange}
                            password={this.state.password}
                            button={this.state.button}/>

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