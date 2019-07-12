import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAACLP6qdgePIo4yhD9EtZP-iA6mfYLwLs",
    authDomain: "xe-bid.firebaseapp.com"
  });

//firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;