<template>
  <div id="main-container">
    <WelcomeCPP />
    <AddCoin />
    <ProfitDisplay />
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
    }
  }
</script>

<style scoped>

</style>