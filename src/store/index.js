import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {
      folder: {
        files: [],
        folders: [],
      },
      breadcrumbs: null,
    },
  },
  mutations: {
    updateItems(state, items) {
      state.items = items
    },
    appendNewFolder(state, newFolder) {
      state.items.folder.folders = state.items.folder.folders.concat(newFolder)
    },
  },
  actions: {},
  modules: {},
})
