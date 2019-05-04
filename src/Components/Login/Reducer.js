import Actions from './Actions';

const intialState = {

}
const Reducer=(state = intialState, action)=> {
    // console.log('login Reducer is ',action);
    switch (action.type) {
        case Actions.USER_LOGIN :
            return  {
                ...action.payload
            }
        case Actions.USER_LOGIN_UPDATE : 
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state;
    }
     
}

export default Reducer;