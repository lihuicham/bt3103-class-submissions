<template>
    <div id="navbar">
      <nav>
        <RouterLink to="/">Home</RouterLink> <span class="divider">|</span>  
        <RouterLink to="/about">About</RouterLink> <span class="divider">|</span>
        <RouterLink to="/profit">Profits</RouterLink>
      </nav>
    </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: 'App'
}


</script>

<style>
#navbar {
  position: fixed;
  left: 2%;
  top: 1%;
  background-color: #333;
  overflow: hidden;
}

.divider {
  color: #f2f2f2;
}

</style>
