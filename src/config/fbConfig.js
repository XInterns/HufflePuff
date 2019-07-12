import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var config = {
    apiKey: "AIzaSyAysB8AoAAeG0OxAvF7mskpkd7tgJZBNME",
    authDomain: "xpl-project.firebaseapp.com",
    databaseURL: "https://xpl-project.firebaseio.com",
    projectId: "xpl-project",
    storageBucket: "",
    messagingSenderId: "486227423226",
    appId: "1:486227423226:web:416d50d08eaa3418"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;

