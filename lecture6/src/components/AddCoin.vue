<template>
    <div id="form-container">
            <form action="" id="user-form">
                <h2 class="subtitle addcoins">Add Coins</h2>
                
                <div id="input-container">
                    <div class="input">
                        <label for="coin1">Coin Name : </label>
                        <input type="text" id="coin1" required="" placeholder="Enter Coin"> <br><br>
                    </div>

                    <div class="input">
                        <label for="ticker1">Ticker : </label>
                        <input type="text" id="ticker1" required="" placeholder="Valid Ticker"> <br><br>
                    </div>

                    <div class="input">
                        <label for="buy1">Buy Price : </label>
                        <input type="number" id="buy1" required="" placeholder="Buy Price"> <br><br>
                    </div>

                    <div class="input">
                        <label for="quant1">Buy Quantity : </label>
                        <input type="number" id="quant1" required="" placeholder="Quantity"> <br><br>
                    </div>

                </div>

                <div id="button-container">
                    <button id="savebutton" type="button" onclick="saveData()">Save</button>
                </div>

            </form>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: var(--light-card-background);
    width: 80%;
    height: 55%;
    border-radius: 1.5em;
    box-shadow: var(--box-shadow-card);
    padding-bottom: 1.5em;
    margin-top: -1.5em;
}

.subtitle.addcoins {
    /* position: relative; */
    margin-top: 0.5em;
    /* right: 8.5em */
    text-align: center;
    margin-bottom: 0.3em;
}

#input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

label {
    font-weight: 600;
    margin-right: 0.5em;
}

.input input {
    border: none;
    outline: none;
    background-color: var(--light-input-background);
    padding: 0.5em 2em 0.5em 0.5em;
    border-radius: 0.8em;
}

#button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#savebutton {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.7em 2em;
    border-radius: 0.7em;
    background: var(--light-button-background);
    box-shadow: rgba(0, 0, 0, 0.3) 1.95px 1.95px 2.6px;
    font-weight: 500;
    font-size: 14px;
}

#savebutton:hover {
    opacity: 0.85;
}




</style>