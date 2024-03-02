<template>
  <div id="app">
    <Head style="position:fixed"></Head>
    <div class="hot"></div>
    <router-view> </router-view>
  </div>
</template>

<script>
import Head from './components/Head.vue'
export default {
  name: 'App',
  components: {
    Head,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.hot{
  height:120px;
  width: 100%;
}
</style>
