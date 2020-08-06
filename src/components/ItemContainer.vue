<template>
  <div>
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
        >Oh no! Something went wrong! You could try reload the page</span
      >
    </div>

    <div v-else-if="folders.length || files.length" class="space-y-7">
      <div v-if="folders.length" class="space-y-3">
        <span class="ml-3 text-sm font-semibold text-gray-500">Folders</span>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          <FolderItem v-for="folder in folders" :key="folder.id" :folder="folder" />
        </div>
      </div>
      <div v-if="files.length" class="space-y-3">
        <span class="ml-3 text-sm font-semibold text-gray-500">Files</span>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          <FileItem v-for="file in files" :key="file.id" :file="file" />
        </div>
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
import FileItem from './FileItem'
import FolderItem from './FolderItem'

export default {
  name: 'ItemContainer',
  data() {
    return {
      files: [],
      folders: [],
      loading: false,
      error: false,
    }
  },
  components: {
    FileItem,
    FolderItem,
  },
  methods: {
    async getItems() {
      try {
        this.loading = true
        let folder = this.$route.params.uuid || 'root'
        const items = await axios.get(`https://api.swap.test/folders/${folder}`)
        this.files = items.data.folder.files
        this.folders = items.data.folder.folders

        this.$store.commit('updateCurrentFolder', items.data.folder)
        this.$store.commit('updateBreadcrumbs', items.data.breadcrumbs)

        document.title =
          items.data.folder.id !== 1 ? `${items.data.folder.name} | Swap` : 'Home | Swap'
      } catch (e) {
        console.error(e)
        this.error = true
      } finally {
        this.loading = false
      }
    },
  },
  created() {
    console.log(this.$route.params.uuid)
    this.getItems()
  },
  watch: {
    $route() {
      this.getItems()
    },
  },
}
</script>
