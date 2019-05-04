import { takeEvery, call, put } from 'redux-saga/effects';
import searchAction from './Actions';
import axios from 'axios'; 

function* searchWorkerSaga(action) {
 console.log('search worker saga ', action.payload);
 const data = yield call (axios.get, `https://api.giphy.com/v1/gifs/trending?api_key=LHp61SDSv8xY9Fx19VPghdv0wmEO7Grs&limit=25&rating=G
 `);
// console.log('trending gifs are ', data);

//  yield put (searchAction.onSearchUpdate(action.payload));
}

function* onPageLoadGetAPI (action)  {
    // console.log('onPageLoad ', action);
    const result = yield call (axios.get,`https://api.giphy.com/v1/gifs/trending?api_key=LHp61SDSv8xY9Fx19VPghdv0wmEO7Grs&limit=25&rating=G`);
    // console.log('onPageLoad Fetching API details ', result.data.data);
    yield put (searchAction.onPageLoadUpdate(result.data.data));

}

export default function* searchwatcherSaga() {
    yield takeEvery(searchAction.ONSEARCH, searchWorkerSaga);
    yield takeEvery (searchAction.ONPAGELOAD,onPageLoadGetAPI);
} 