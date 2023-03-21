import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQyNmTEo_OHBoDL0lmuK2jQK2Crw0Oecg",
    authDomain: "notes-331dc.firebaseapp.com",
    projectId: "notes-331dc",
    storageBucket: "notes-331dc.appspot.com",
    messagingSenderId: "106912628671",
    appId: "1:106912628671:web:0aa56574df77fdc012ab0a"
};

firebase.initializeApp(firebaseConfig);
export { firebase };