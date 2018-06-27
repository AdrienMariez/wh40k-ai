import {initializeApp} from 'firebase'

    
  var firebaseApp = initializeApp({
    apiKey: "AIzaSyDRXve03b8FB5GpdmJixbzVX6-eP9xaMzU",
    authDomain: "wh-ai-a8c6d.firebaseapp.com",
    databaseURL: "https://wh-ai-a8c6d.firebaseio.com",
    projectId: "wh-ai-a8c6d",
    storageBucket: "wh-ai-a8c6d.appspot.com",
    messagingSenderId: "1047907195228"
  });

  export const connection = firebaseApp.database();