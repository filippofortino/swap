<template>
  <div>
    <Modal v-if="renameModalIsOpen" :item="selectedItem" />
    <SelectedItemsActionsBar
      v-if="itemsAreSelected"
      :items="selectedItems"
      @unselect-all="unselectAllItems()"
      @rename-item="renameModalIsOpen = true"
    />
    <div v-if="loading" class="py-6">
      <svg
        class="animate-spin-bezier h-10 w-10 mx-auto text-indigo-600"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <path
          d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z"
        ></path>
      </svg>
    </div>

    <div v-else-if="error" class="flex flex-col items-center py-12 space-y-6">
      <svg
        class="h-20 sm:h-28 text-gray-300"
        aria-hidden="true"
        data-prefix="fad"
        data-icon="exclamation-triangle"
        viewBox="0 0 576 512"
      >
        <g class="fa-group">
          <path
            class="fa-secondary"
            fill="currentColor"
            d="M569.52 440L329.58 24c-18.44-32-64.69-32-83.16 0L6.48 440c-18.42 31.94 4.64 72 41.57 72h479.89c36.87 0 60.06-40 41.58-72zM288 448a32 32 0 1132-32 32 32 0 01-32 32zm38.24-238.41l-12.8 128A16 16 0 01297.52 352h-19a16 16 0 01-15.92-14.41l-12.8-128A16 16 0 01265.68 192h44.64a16 16 0 0115.92 17.59z"
            opacity=".4"
          />
          <path
            class="fa-primary"
            fill="currentColor"
            d="M310.32 192h-44.64a16 16 0 00-15.92 17.59l12.8 128A16 16 0 00278.48 352h19a16 16 0 0015.92-14.41l12.8-128A16 16 0 00310.32 192zM288 384a32 32 0 1032 32 32 32 0 00-32-32z"
          />
        </g>
      </svg>
      <span class="text-sm sm:text-base leading-6 text-gray-400 text-center"
        >Oh no! Something went wrong! You could try to reload the page</span
      >
    </div>

    <div v-else-if="folders.length || files.length" class="space-y-7">
      <div v-if="folders.length" class="space-y-3">
        <span class="ml-3 text-sm font-semibold text-gray-500">Folders</span>
        <!-- <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"> -->
        <transition-group
          enter-active-class="transition ease-out duration-500"
          enter-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-500"
          leave-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
          tag="div"
          class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
        >
          <FolderItem
            v-for="folder in folders"
            :key="folder.id"
            :folder="folder"
            :selected="isItemSelected(folder, 'folders')"
            :force-select="itemsAreSelected"
            @item-selected="selectItem($event, 'folders')"
            @item-unselected="unselectItem($event, 'folders')"
          />
        </transition-group>
        <!-- </div> -->
      </div>
      <div v-if="files.length" class="space-y-3">
        <span class="ml-3 text-sm font-semibold text-gray-500">Files</span>
        <transition-group
          enter-active-class="transition ease-out duration-500"
          enter-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-500"
          leave-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
          tag="div"
          class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
        >
          <FileItem
            v-for="file in files"
            :key="file.id"
            :file="file"
            :selected="isItemSelected(file, 'files')"
            :force-select="itemsAreSelected"
            @item-selected="selectItem($event, 'files')"
            @item-unselected="unselectItem($event, 'files')"
          />
        </transition-group>
      </div>
    </div>

    <div v-else class="flex flex-col items-center py-12 space-y-6">
      <svg
        aria-hidden="true"
        data-prefix="fad"
        data-icon="copy"
        class="h-20 sm:h-28 text-gray-300"
        viewBox="0 0 448 512"
      >
        <g class="fa-group">
          <path
            class="fa-secondary"
            fill="currentColor"
            d="M352 96V0H152a24 24 0 00-24 24v368a24 24 0 0024 24h272a24 24 0 0024-24V96z"
            opacity=".4"
          />
          <path
            class="fa-primary"
            fill="currentColor"
            d="M96 392V96H24a24 24 0 00-24 24v368a24 24 0 0024 24h272a24 24 0 0024-24v-40H152a56.06 56.06 0 01-56-56zM441 73L375 7a24 24 0 00-17-7h-6v96h96v-6.06A24 24 0 00441 73z"
          />
        </g>
      </svg>
      <span class="text-sm sm:text-base leading-6 text-gray-400 text-center"
        >Whoops! You just found an empty folder!</span
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Modal from './Modal.vue'
import FileItem from './FileItem'
import FolderItem from './FolderItem'
import SelectedItemsActionsBar from './SelectedItemsActionsBar'

export default {
  name: 'ItemContainer',
  data() {
    return {
      loading: false,
      error: false,
      selectedItems: {
        files: [],
        folders: [],
      },
      renameModalIsOpen: false,
    }
  },
  components: {
    FileItem,
    FolderItem,
    SelectedItemsActionsBar,
    Modal,
  },
  computed: {
    files() {
      return this.$store.state.items.folder.files
    },
    folders() {
      return this.$store.state.items.folder.folders
    },
    itemsAreSelected() {
      return this.selectedItems.files.length || this.selectedItems.folders.length
    },
    /**
     * The currently selected item.
     *
     * If only one item is selected, return that item,
     * else if selected items are more than one or none, return null
     */
    selectedItem() {
      if (this.selectedItems.files.length === 1) {
        return { item: this.selectedItems.files[0], type: 'files' }
      }

      if (this.selectedItems.folders.length === 1) {
        return { item: this.selectedItems.folders[0], type: 'folders' }
      }

      return null
    },
  },
  methods: {
    async getItems() {
      try {
        this.loading = true

        let folder = this.$route.params.uuid || 'root'
        const items = await axios.get(`https://api.swap.test/folders/${folder}`)

        this.$store.commit('updateItems', items.data)

        document.title = `${items.data.folder.name} | Swap`
      } catch (e) {
        console.error(e)
        this.error = true
      } finally {
        this.loading = false
      }
    },
    selectItem(item, type) {
      this.selectedItems[type].push(item)
    },
    unselectItem(item, type) {
      this.selectedItems[type] = this.selectedItems[type].filter(sItem => sItem.id !== item.id)
    },
    isItemSelected(item, type) {
      return this.selectedItems[type].filter(sItem => sItem.id === item.id).length > 0
    },
    unselectAllItems() {
      this.selectedItems.files = []
      this.selectedItems.folders = []
    },
  },
  created() {
    this.getItems()
  },
  watch: {
    $route() {
      this.getItems()
    },
  },
}
</script>

<style scoped>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
