import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {
      folder: null,
      files: [],
      folders: [],
      breadcrumbs: null,
    },
  },
  mutations: {
    updateItems(state, items) {
      state.items = items
    },
  },
  actions: {},
  modules: {},
})
