<template>
  <div id="app">
    <Navigation/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);

</style>
