import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDjxdnV37jruVBs5JrOYaLQj7U4SSAaAIY",
    authDomain: "democpp-lihui.firebaseapp.com",
    projectId: "democpp-lihui",
    storageBucket: "democpp-lihui.appspot.com",
    messagingSenderId: "888446378881",
    appId: "1:888446378881:web:7120039df90c90b53d7e80"
};

const firebaseApp = initializeApp(firebaseConfig);
  
export default firebaseApp;