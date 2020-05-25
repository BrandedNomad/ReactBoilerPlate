import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: 'AIzaSyAdcTBkULme5gAMwksm7n4aSm9uRVXVkTQ',
    authDomain: "expensify-3a1e5.firebaseapp.com",
    databaseURL: "https://expensify-3a1e5.firebaseio.com",
    projectId: "expensify-3a1e5",
    storageBucket: "expensify-3a1e5.appspot.com",
    messagingSenderId: "932279113711",
    appId: "1:932279113711:web:d77772e36517d5065b881a"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider,database as default};
