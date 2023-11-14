// Filename - firebase.js

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUbn0DZLA78mbtXhhmSmm5gckDYHmOa0I",
    authDomain: "timbacsi-59a15.firebaseapp.com",
    projectId: "timbacsi-59a15",
    storageBucket: "timbacsi-59a15.appspot.com",
    messagingSenderId: "757567747442",
    appId: "1:757567747442:web:daec31682ce274f7bf19eb"
    // apiKey: "AIzaSyDzuMXg7dlBtJcCkOReBgsGeXplm2Uar-w",
    // authDomain: "datvexemphim-5045f.firebaseapp.com",
    // projectId: "datvexemphim-5045f",
    // storageBucket: "datvexemphim-5045f.appspot.com",
    // messagingSenderId: "122854954377",
    // appId: "1:122854954377:web:332b366dd8d3a108453d58",
    // measurementId: "G-VY4NYDMB7H"   
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export default auth;