import { takeEvery, call, put } from 'redux-saga/effects';
import searchAction from './Actions';
import axios from 'axios'; 
const randomGif= `https://api.giphy.com/v1/gifs/random?api_key=LHp61SDSv8xY9Fx19VPghdv0wmEO7Grs&tag=&rating=G`;
const trendingGif= `https://api.giphy.com/v1/gifs/trending?api_key=LHp61SDSv8xY9Fx19VPghdv0wmEO7Grs&limit=25&rating=G`;

function* searchWorkerSaga(action) {
 console.log('search worker saga ', action.payload);
 const data = yield call (axios.get,randomGif );
// console.log('trending gifs are ', data);

 yield put (searchAction.onSearchUpdate(action.payload));
}

function* onPageLoadGetAPI (action)  {
    console.log('onPageLoad loading ', action);
    const {isLoading}= action.payload;
    const result = yield call (axios.get,trendingGif);
    // console.log('onPageLoad Fetching API details ', result.data);
    if(result.data.data) {
        yield put (searchAction.onPageLoadUpdate(result.data.data, isLoading));
    } else {
        yield put (searchAction.onPageLoadUpdate([],!isLoading))
    }
}

function* loadingSpinner(action) {
    console.log('worker sage on loading ', action);
    yield put(searchAction.onLoadingUpdate())
}

export default function* searchwatcherSaga() {
    yield takeEvery(searchAction.ONSEARCH, searchWorkerSaga);
    yield takeEvery (searchAction.ONPAGELOAD,onPageLoadGetAPI);
    yield takeEvery(searchAction.ONLOADING, loadingSpinner )
} 