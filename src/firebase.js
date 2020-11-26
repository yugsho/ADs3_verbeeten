import firebase from 'firebase'

// Your web app's Firebase configuration
 const config = {
   apiKey: "AIzaSyBk6zfstIMNhd48H-q5GaZoCIfsF4FxLK4",
   authDomain: "ads3verbeeten.firebaseapp.com",
   databaseURL: "https://ads3verbeeten.firebaseio.com",
   projectId: "ads3verbeeten",
   storageBucket: "ads3verbeeten.appspot.com",
   messagingSenderId: "776818348554",
   appId: "1:776818348554:web:6d492ded21815e73c185f3"
 };
 // Initialize Firebase
 firebase.initializeApp(config);

 export default firebase;
