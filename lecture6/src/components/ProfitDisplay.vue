<template>
    <div id="table-container">
        <h2 class="subtitle currentportfolio">Current Portfolio</h2>
        <table id="table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Coin</th>
                    <th>Ticker</th>
                    <th>Buy_Price</th>
                    <th>Buy_Quantity</th>
                    <th>Current_Price</th>
                    <th>Profit</th>
                    <th>Options</th>
                </tr>
            </thead>

            <tbody>
                
            </tbody>

        </table>
    </div>

    <div id="totalprofit-container">
        <h2 class="subtitle" id="totalprofit">Your Total Profit is : XX$</h2>
    </div>
</template>

<script>
import firebaseApp from '../firebase';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";import ccxt from 'ccxt';

const db = getFirestore(firebaseApp);
export default {

    mounted() {
        async function display() {
            let allDocs = await getDocs(collection(db, "Portfolio"))

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
                    let binance = new ccxt.binance();
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

            await deleteDoc(doc(db, "Portfolio", coin))
            console.log("Document successfully deleted ! ", coin);
            // window.location.reload()
            let tb = document.getElementById('table')
            while (tb.rows.length > 1) {
                tb.deleteRow(1)
            }
            document.getElementById('totalprofit').innerHTML = "";
            display();
        }
    }
        
}
</script>

<style>
#table-container {
    background: var(--light-card-background);
    width: 80%;
    height: auto;
    border-radius: 1.5em;
    box-shadow: var(--box-shadow-card);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2em;
    margin-top: 2em;
}
 
#totalprofit-container {
    background: var(--total-profit-background);
    width: 80%;
    border-radius: 0.8em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.3em 0;
    box-shadow: var(--box-shadow-card);
    color: var(--light-card-background);
    margin-top: -1em;
}

/* ======== TABLE CSS ======== */

table {
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

table thead tr {
    background-color: var(--table-header-color);
    color: white;
    text-align: left;
}

table th, 
table td {
    padding: 8px 10px;
}

table tbody tr {
    border-bottom: 1px solid var(--table-borderbottom-color);
    background-color: var(--table-row-color);
}

.delete-button {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5em 0.7em;
    border-radius: 0.7em;
    color: white;
    font-weight: 500;
    background: var(--delete-button-background);
    box-shadow: rgba(0, 0, 0, 0.3) 1.95px 1.95px 2.6px;
}

.delete-button:hover {
    opacity: 0.85;
}

</style>