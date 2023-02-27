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
    export default {
        
    }
</script>

<style scoped>
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
    margin-top: -0.6em;
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