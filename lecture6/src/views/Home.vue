<template>
  <div id="main-container">
    <WelcomeCPP />
    <AddCoin @added="change"/>
    <ProfitDisplay :key="refreshComp"/>
    <div class="coin-img-container">
      <img id="coins-img" src="@/assets/coins.png" alt="coins-img" >
    </div>
    
    <h5 class="copyright">&#169 2023 CPP. All rights reserved.</h5>
  </div>
</template>

<script>
import WelcomeCPP from '../components/WelcomeCPP.vue';
import AddCoin from '../components/AddCoin.vue';
import ProfitDisplay from '../components/ProfitDisplay.vue';

export default {
  name: 'Home',
  components: {
    WelcomeCPP,
    AddCoin,
    ProfitDisplay,
  },

  data() {
    return {
      refreshComp: 0
    }
  },

  methods: {
    change() {
      this.refreshComp += 1
    }
  }
}
</script>

<style>
/* COINS IMAGE */
.coin-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -2em;
}

.coin-img-container img {
    width: 30%;
    height: auto;
}

/* COPYRIGHT */
.copyright {
    margin-top: -1em;
}
</style>