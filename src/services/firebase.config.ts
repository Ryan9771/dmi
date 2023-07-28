import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsp5eQhmQCe1eDYLC8LaDbHQ6ahzrcfzg",
    authDomain: "cftdmi.firebaseapp.com",
    projectId: "cftdmi",
    storageBucket: "cftdmi.appspot.com",
    messagingSenderId: "757769184676",
    appId: "1:757769184676:web:7113ae12cd1d565fd54d31"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);