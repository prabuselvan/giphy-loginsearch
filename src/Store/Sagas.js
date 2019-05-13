import {all, fork} from 'redux-saga/effects';
import loginSaga from '../Components/Login/Saga';
import searchSaga from '../Components/Dashboard/Saga';

export default function* rootSagas() {
  yield all([
      loginSaga(), 
      searchSaga(),
   
  ]);
}
