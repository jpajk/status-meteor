
import uniqid from 'uniqid'

const state = {
  messages: []
}

const getters = {
  messages (state) {
    return state.messages
  }
}

const mutations = {
  ADD_TO_MESSAGES (state, { id, type, message }) {
    state.messages.push({ id, type, message })
  },

  REMOVE_FROM_MESSAGES (state, id) {
    let deletedIndex = 0

    state.messages.forEach((val, i) => {
      if (val.id === id) {
        deletedIndex = i
      }
    })

    state.messages.splice(deletedIndex, 1)
  }
}

const actions = {
  relayMessage(context, payload) {
    let id = uniqid()

    context.commit('ADD_TO_MESSAGES', {
      ...payload,
      id: id
    })

    setTimeout(() => {
      context.commit('REMOVE_FROM_MESSAGES', id)
    }, 5000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
