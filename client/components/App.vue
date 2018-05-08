<template>
  <div id="app">
    <app-navbar/>
    <main role="main" class="container">
      <app-messages/>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
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
  components: {AppMessages, AppNavbar},
}
</script>

<style lang="scss">
  @import './assets/scss/styles.scss';

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
