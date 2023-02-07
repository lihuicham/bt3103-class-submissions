// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjxdnV37jruVBs5JrOYaLQj7U4SSAaAIY",
    authDomain: "democpp-lihui.firebaseapp.com",
    projectId: "democpp-lihui",
    storageBucket: "democpp-lihui.appspot.com",
    messagingSenderId: "888446378881",
    appId: "1:888446378881:web:7120039df90c90b53d7e80"
};
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Access database 
var db = firebase.firestore()

// SET DATA --> save to firestore 

async function saveData() {
    let coin = document.getElementById('coin1').value;
    let ticker = document.getElementById('ticker1').value;
    let buyPrice = document.getElementById('buy1').value;
    let buyQuantity = document.getElementById('quant1').value;

    console.log("Saving...");

    await db.collection('Portfolio').doc(coin).set({
        Coin: coin, 
        Ticker: ticker,
        Buy_Price: buyPrice,
        Buy_Quantity: buyQuantity
    })

    console.log('Document written into database')
}
