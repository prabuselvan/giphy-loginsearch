import {all, fork} from 'redux-saga/effects';
import loginSaga from '../Components/Login/Saga';

export default function* rootSagas() {
  yield all([
      loginSaga(), 
  ]);
  // yield fork(loginSaga);
}

// export default function* rootSagas() {
//   yield fork(
//     loginSaga()
//   )
// }