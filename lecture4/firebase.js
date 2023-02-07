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

async function saveData() {
    let coin = document.getElementById('coin1').value;
    let ticker = document.getElementById('ticker1').value;
    let buyPrice = document.getElementById('buy1').value;
    let buyQuantity = document.getElementById('quant1').value;

    await db.collection('Portfolio').doc(coin).set({
        Coin: coin, 
        Ticker: ticker,
        Buy_Price: buyPrice,
        Buy_Quantity: buyQuantity
    })

    window.location.reload()
}

async function display() {
    let allDocs = await db.collection('Portfolio').get();

    let index = 1;
    let totalProfit = 0;

    allDocs.forEach((docs) => {
        let data = docs.data();

        let coin = data.Coin;
        let ticker = data.Ticker;
        let buyPrice = data.Buy_Price;
        let buyQuantity = data.Buy_Quantity;

        // create rows and cells in the table 

        let tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
        let row = tbodyRef.insertRow()

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);

        cell1.innerHTML = index;
        cell2.innerHTML = coin;
        cell3.innerHTML = ticker;
        cell4.innerHTML = buyPrice;
        cell5.innerHTML = buyQuantity;
        cell6.innerHTML = 0;
        cell7.innerHTML = 0;

        // creating elements and giving classnames through javascript 
        cell7.className = 'profits';

        let deleteButton = document.createElement('button');

        deleteButton.id = String(coin);
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = 'Delete'

        //append delete button in cells 
        cell8.appendChild(deleteButton)
        deleteButton.onclick = function() {
            deleteInstrument(coin)
        }

        profitCalculator(ticker)

        async function profitCalculator(ticker) {
            let binance = new ccxt.binance;
            let x = await binance.fetch_ohlcv(ticker, "5m");
            cell6.innerHTML = x[499][4];
            cell7.innerHTML = Math.round(buyQuantity * (parseFloat(cell6.innerHTML) - parseFloat(buyPrice)))
            totalProfit = totalProfit + parseFloat(cell7.innerHTML)
            document.getElementById("totalprofit").innerHTML = ('Total Profit is : $ ' + String(totalProfit))
        }

        index += 1;

    })
}

display()

async function deleteInstrument(coin) {
    console.log('You are going to delete : ' + coin)

    await db.collection('Portfolio').doc(coin).delete()
    window.location.reload()
}
