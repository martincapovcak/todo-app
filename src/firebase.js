import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_zehwZArKZc8BIjgYVSvoZ6G2pFMM9SM",
    authDomain: "todo-app-672a3.firebaseapp.com",
    databaseURL: "https://todo-app-672a3.firebaseio.com",
    projectId: "todo-app-672a3",
    storageBucket: "todo-app-672a3.appspot.com",
    messagingSenderId: "22599286613",
    appId: "1:22599286613:web:1fbe50be4be5089c9af9dc"
});

const db = firebaseApp.firestore();

export default db;