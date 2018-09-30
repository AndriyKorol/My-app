import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDfTk27pmcHhtAlk4av7vQrI1dJ4OxX3JE",
    authDomain: "some-news-app.firebaseapp.com",
    databaseURL: "https://some-news-app.firebaseio.com",
    projectId: "some-news-app",
    storageBucket: "some-news-app.appspot.com",
    messagingSenderId: "980718396780"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { app, base, facebookProvider }
