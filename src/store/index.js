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
    appendNewFile(state, newFile) {
      state.items.folder.files = state.items.folder.files.concat(newFile)
    },
    revertUploadedFile(state, filepondId) {
      if (filepondId) {
        state.items.folder.files.splice(
          state.items.folder.files.findIndex(file => file.filepondId === filepondId),
          1
        )
      }
    },
  },
  actions: {},
  modules: {},
})
