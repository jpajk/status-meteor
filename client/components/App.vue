<template>
  <div id="app">
    <app-navbar/>
    <main role="main" class="container">
      <app-messages/>
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AppNavbar from './Shared/AppNavbar'
import AppMessages from "./Shared/AppMessages";

export default {
  name: 'App',
  components: {AppMessages, AppNavbar}
}
</script>

<style lang="scss">
  @import './assets/scss/styles.scss';
</style>
