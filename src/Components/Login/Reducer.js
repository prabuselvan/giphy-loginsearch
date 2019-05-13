import Actions from './Actions';

const intialState = {
 userName: '',
 message:''
}
const Reducer=(state = intialState, action)=> {
    console.log('login Reducer is ',action.payload);
    switch (action.type) {
       
        case Actions.USER_LOGIN_UPDATE : 
            return {
                ...state,
                userName:action.payload.uname,
                message:action.payload.message
            }
        case Actions.USER_LOGIN_VALIDATION : 
            return {
                ...state,
                userName: action.payload.uname,
                message: action.payload.message
            }
        case Actions.USER_LOGOUT_UPDATE :
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state;
    }
     
}

export default Reducer;