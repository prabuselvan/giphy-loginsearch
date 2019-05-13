import loginAction from './Actions';
import {takeEvery, call, put} from 'redux-saga/effects';
import {Redirect} from 'react-router-dom';
import cookies from 'js-cookie';
import fire from '../../Config/Fire';
import '@firebase/firestore';
import * as firebase from 'firebase';
import axios from 'axios';

function* loginWorkerSaga(action) {
    console.log('login worker saga ',action.payload);
    console.log('loginWorkersaga');
    const {uname, password} = action.payload;

    try {
        const output =  yield call(
            [ firebase.auth(), firebase.auth().signInWithEmailAndPassword ],
            uname,
            password,
          );
        cookies.set('loggedinUser', output.user.email);
          console.log('saga output is ', output);
             const userDetails = {
                                    uname: output.user.email,
                                    message: 'Valid User'
                                 };
         yield put (loginAction.userLoginUpdate(userDetails));

    } catch(err) {
        console.log('error is ', err.message);
        console.log( 'error code is ',err.code);
        cookies.set('loggedinUser',{});
        const invalidUser = {
                        uname: '',
                        message: err.message
        }
        yield put (loginAction.userLoginValidation(invalidUser));
    }

}

function* logoutWorkerSaga(action) {
    console.log('logout workersaga', action);
    cookies.remove('loggedinUser',{});
    yield put(loginAction.userLogoutUpdate({}));

}

export default function* loginWatcherSaga() {
    yield takeEvery(loginAction.USER_LOGIN, loginWorkerSaga);
    yield takeEvery(loginAction.USER_LOGOUT, logoutWorkerSaga)
};

// takeEvery always accept Actions

// put always accept ActionCreator
