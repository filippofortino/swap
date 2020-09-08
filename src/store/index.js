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
      let foundIndex = state.items.folder.files.findIndex(file => file.filepondId === filepondId)
      // If the element actually exists in the array
      if (foundIndex > -1) {
        state.items.folder.files.splice(foundIndex, 1)
      }
    },
    removeDeletedItems(state, items) {
      items.files.forEach(file => {
        state.items.folder.files = state.items.folder.files.filter(sFile => sFile.id !== file.id)
      })

      items.folders.forEach(folder => {
        state.items.folder.folders = state.items.folder.folders.filter(
          sFolder => sFolder.id !== folder.id
        )
      })
    },
    renameItem(state, { itemId, newName, itemType }) {
      let index = state.items.folder[itemType].findIndex(item => item.id === itemId)
      state.items.folder[itemType][index].name = newName
    },
  },
  actions: {},
  modules: {},
})
