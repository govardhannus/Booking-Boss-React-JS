import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDKQNeJ8DMmeUmlnhCZmVFExq5oYbJ37-U",
    authDomain: "react-login-2d55f.firebaseapp.com",
    databaseURL: "https://react-login-2d55f.firebaseio.com",
    projectId: "react-login-2d55f",
    storageBucket: "react-login-2d55f.appspot.com",
    messagingSenderId: "1025513709526"
};

const fire = firebase.initializeApp(config)
export default fire;