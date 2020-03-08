<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/home/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style lang="less">
#app {
  font-family: -webkit-pictograph,monospace,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
