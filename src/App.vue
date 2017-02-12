<template>
  <div id="app">
    <a href="http://www.iwminc.com/" target="_blank">
      <img src="./assets/logo_med.gif" />
    </a>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }

</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
