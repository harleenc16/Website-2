import firebase from 'firebase';


  var firebaseApp =  firebase.initializeApp({

    apiKey: "AIzaSyBPmS9VW9T0eVkgK5ydKOj3SaRJszOA35o",

    authDomain: "contact-form-ecca3.firebaseapp.com",

    projectId: "contact-form-ecca3",

    storageBucket: "contact-form-ecca3.appspot.com",

    messagingSenderId: "818484255819",

    appId: "1:818484255819:web:413d2f1bd53960e30ec1ce"

  });

  var db = firebaseApp.firestore();

  export { db }; 



