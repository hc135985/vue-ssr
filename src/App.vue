<template>
    <div id="app">
        <Layout />
    </div>
</template>

<script>
import Layout from './components/Layout';
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
html,
body {
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: fixed;
  padding: 0;
  right: 0;
  left: 0;
  min-height: 100%;
}
</style>
