
import Vue from 'vue'
import Vuex from 'vuex'

import Users from './modules/Users'
import Messages from './modules/Messages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Users, Messages
  },
  strict: process.env.NODE_ENV !== 'production'
})
