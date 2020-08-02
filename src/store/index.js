import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breadcrumbs: null,
  },
  mutations: {
    updateBreadcrumbs(state, newBreadcrumbs) {
      state.breadcrumbs = newBreadcrumbs
    },
  },
  actions: {},
  modules: {},
})
