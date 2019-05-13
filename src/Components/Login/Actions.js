const Actions = {
    USER_LOGIN : 'USER_LOGIN',
    USER_LOGIN_UPDATE:'USER_LOGIN_UPDATE',
    USER_LOGIN_VALIDATION: 'USER_LOGIN_VALIDATION',
    userLogin: (payload)=>({ type: Actions.USER_LOGIN, payload}),
    userLoginUpdate : (payload)=> ({type : Actions.USER_LOGIN_UPDATE, payload}),
    userLoginValidation: (payload)=> ({type : Actions.USER_LOGIN_VALIDATION, payload}),
    USER_LOGOUT: 'USER_LOGOUT',
    USER_LOGOUT_UPDATE:'USER_LOGOUT_UPDATE',
     userLogout: (payload)=> ({type: Actions.USER_LOGOUT, payload}),
     userLogoutUpdate:(payload)=> ({type: Actions.USER_LOGOUT_UPDATE, payload})
}

export default Actions;