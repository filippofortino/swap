import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentFolder: null,
    breadcrumbs: null,
  },
  mutations: {
    updateBreadcrumbs(state, newBreadcrumbs) {
      state.breadcrumbs = newBreadcrumbs
    },
    updateCurrentFolder(state, folder) {
      state.currentFolder = folder
    },
  },
  actions: {},
  modules: {},
})
