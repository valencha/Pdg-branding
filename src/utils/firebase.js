  
import * as firebase from "firebase/app";

import "firebase/firestore";
import 'firebase/storage';


var firebaseConfig ={

    apiKey: "AIzaSyA8zk6KZ2mMNhQpz_rq4cjPAcL3p5hR_UU",
    authDomain: "branding-pdg.firebaseapp.com",
    databaseURL: "https://branding-pdg.firebaseio.com",
    projectId: "branding-pdg",
    storageBucket: "branding-pdg.appspot.com",
    messagingSenderId: "1061499487627",
    appId: "1:1061499487627:web:8cbe6dc16d28688a8ddb8e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fb = firebase;