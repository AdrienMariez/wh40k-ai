// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

var VueFire = require('vuefire')
var firebase = require('firebase')
Vue.use(VueFire)


// import firebase from 'firebase'
// import 'firebase/firestore'
// import VueFire from 'vuefire'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




// Vue.use(VueFire)
// firebase.initializeApp({
//   apiKey: "AIzaSyDRXve03b8FB5GpdmJixbzVX6-eP9xaMzU",
//   projectId: 'wh-ai-a8c6d',
//   databaseURL: 'https://wh-ai-a8c6d.firebaseio.com'
// })

// export const db = firebase.firestore();



// console.log(db);
// console.log(db.doc('armyList'));

 
//  Initialize Firebase
// const config = {
//   apiKey: "AIzaSyDRXve03b8FB5GpdmJixbzVX6-eP9xaMzU",
//   authDomain: "wh-ai-a8c6d.firebaseapp.com",
//   databaseURL: "https://wh-ai-a8c6d.firebaseio.com",
//   projectId: "wh-ai-a8c6d",
//   storageBucket: "wh-ai-a8c6d.appspot.com",
//   messagingSenderId: "1047907195228"
// };

// export const firebaseApp = firebase.initializeApp(config)

// export const usersRef = firebaseApp.database().ref().child('armies')




// console.log(db.ref());