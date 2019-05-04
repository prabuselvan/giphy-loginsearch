import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import createSagaMiddleware from 'redux-saga';
import loginReducer from '../Components/Login/Reducer';
import searchReducer from '../Components/Dashboard/Reducer';
import rootSagas from './Sagas';
const rootReducers= combineReducers({
    login: loginReducer,
    search: searchReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const sagaMiddleware = createSagaMiddleware();
const store =createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSagas)
export default store;