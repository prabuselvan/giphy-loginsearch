const Actions = {
    USER_LOGIN : 'USER_LOGIN',
    USER_LOGIN_UPDATE:'USER_LOGIN_UPDATE',
    userLogin: (payload)=>({ type: Actions.USER_LOGIN, payload}),
    userLoginUpdate : (payload)=> ({type : Actions.USER_LOGIN_UPDATE, payload})

}

export default Actions;