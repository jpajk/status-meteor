
const state = {
  isAuthenticated: false,
  token: '',
  currentUser: {}
}

const getters = {
  isAuthenticated (state) {
    return state.isAuthenticated
  },
  token (state) {
    return state.token
  },
  currentUser (state) {
    return state.currentUser
  }
}

const mutations = {
  SET_IS_AUTHENTICATED (state, payload) {
    state.isAuthenticated = payload
  },

  SET_TOKEN (state, payload) {
    state.token = payload
  },

  SET_CURRENT_USER (state, payload) {
    state.currentUser = payload
  }
}

const actions = {
  /**
   * @returns {Promise<any>}
   */
  checkIsAuthenticated () {
    return new Promise((resolve, reject) => {
      reject()
    })
  },

  /**
   * @param context
   * @param email
   * @param password
   * @returns {Promise<any>}
   */
  loginOrRegister (context, { email, password }) {
    return new Promise((resolve, reject) => {
      reject
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
