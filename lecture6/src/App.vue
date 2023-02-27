<template>
    <div id="nav">
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/about">About</RouterLink>
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

<style scoped>

</style>
