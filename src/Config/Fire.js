import firebase from 'firebase/app';
import 'firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase'
const config = {
    apiKey : 'AIzaSyC-WbQG6ShHhB3NriH3_dezd3QR04gJtYQ',
    authDomain : 'giphysearchapp.firebaseio.com',
    databaseURL : 'https://giphysearchapp.firebaseio.com/',
    projectId: 'giphysearchapp',
    storageBucket : 'giphysearchapp.appspot.com',
    messagingSenderID : '497851842953'
}

const fire = firebase.initializeApp(config);
// const fire = new ReduxSagaFirebase(config);
export default fire;

