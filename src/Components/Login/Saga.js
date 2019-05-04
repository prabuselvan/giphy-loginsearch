import loginAction from './Actions';
import {takeEvery, call, put} from 'redux-saga/effects';
import cookies from 'js-cookie';
import fire from '../../Config/Fire';
import '@firebase/firestore';
// require('firebase/auth');
import * as firebase from 'firebase';

import axios from 'axios';

function* loginWorkerSaga(action) {
    // console.log('login worker saga ',action.payload);
    const {email, pwd} = action.payload;
    let uname;
    // try {
        // const auth= firebase.auth();
        // console.log(email, pwd);
        // const data = yield call(fire.auth().signInWithEmailAndPassword(email,pwd));
        // console.log(data);

        firebase.auth().signInWithEmailAndPassword(email,pwd).then((res)=> {
                console.log('response is ', res);
                // yield put (loginAction.userLoginUpdate(uname));
                //  uname = res;
                
            }).catch((err)=> {
                console.log('Error is ', err);
            })
            // console.log(uname);
            // yield put (loginAction.userLoginUpdate(uname));
        // console.log('response is ',data)
        // const data = yield call(firebase.auth().signInWithEmailAndPassword (email,pwd));
        // console.log('response is ', data);

        // yield  put (loginAction.userLoginUpdate(data.user.email));

    // } catch(error) {
        // console.log('Message is ', error);

    // }
}

export default function* loginWatcherSaga() {
    yield takeEvery(loginAction.USER_LOGIN, loginWorkerSaga)
};

// takeEvery always accept Actions

// put always accept ActionCreator