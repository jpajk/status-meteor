import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import {RouterFactory, nativeScrollBehavior} from 'meteor/akryum:vue-router2';
import router from './router';
import App from './components/App';
import store from './store'
import VueMeteorTracker from 'vue-meteor-tracker';

Vue.use(VueMeteorTracker);
Vue.use(BootstrapVue);

Meteor.startup(() => {
  new Vue({
    router,
    store,
    el: '#app',
    render: (createElement) => {
      return createElement(App);
    }
  });
});
