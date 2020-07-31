<template>
  <div class="space-y-7">
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
    }
  },
  components: {
    FileItem,
    FolderItem,
  },
  methods: {
    async getItems() {
      try {
        const items = await axios.get('https://api.swap.test/folders/root')
        this.files = items.data.folder.files
        this.folders = items.data.folder.folders
        console.log(items)
        // this.items = items.data.items
      } catch (e) {
        console.error(e)
      }
    },
  },
  mounted() {
    this.getItems()
  },
}
</script>
