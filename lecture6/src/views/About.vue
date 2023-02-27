<template>
  <div id="main-container">
    <h1>This is an about page</h1>
    <WelcomeCPP />
    <div class="desc-container">
      <span>CPP Description: </span>
    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus atque voluptatibus, 
      enim distinctio sapiente consectetur perspiciatis id, unde saepe deleniti adipisci, 
      ratione impedit consequuntur. Distinctio sapiente consectetur perspiciatis id, unde saepe deleniti adipisci, 
      ratione impedit consequuntur.</span>
    </div>

  </div>
</template>

<script>
import WelcomeCPP from '../components/WelcomeCPP.vue';

export default {
  name: 'About',
  components: {
    WelcomeCPP,
  }
}

</script>

<style>
.desc-container {
  width: 90%
}

</style>

