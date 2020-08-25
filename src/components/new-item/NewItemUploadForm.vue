<template>
  <div class="space-y-6">
    <p class="text-center text-base leading-6 font-medium text-gray-500">
      Upload a file in <span class="font-semibold">"{{ currentFolder.name }}"</span>
    </p>
    <FilePond
      ref="pond"
      allow-multiple="true"
      @addfile="attachParentFolderMetadata"
      @processfile="appendFileToList"
      :server="{
        url: 'https://api.swap.test/files',
        process: {
          onload: getServerResponse,
        },
        revert: '/revert',
      }"
    />
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

const FilePond = vueFilePond(FilePondPluginImagePreview)

export default {
  name: 'NewItemUploadForm',
  data() {
    return {
      fileQueue: [],
    }
  },
  computed: {
    currentFolder() {
      return this.$store.state.items.folder
    },
  },
  methods: {
    /**
     * Attach the parent folder id to the file when uploading
     * to place the file in the correct folder in the backend.
     */
    attachParentFolderMetadata(error, file) {
      file.setMetadata('parent_folder', this.currentFolder.id)
    },
    /**
     * Update the file list and show newly uploaded files.
     */
    appendFileToList(error, uploadedFile) {
      // Get the uploaded file from the queue and append to DOM
      let fileToAppend = this.fileQueue.find(file => {
        return file.uuid === uploadedFile.serverId
      })

      this.$store.commit('appendNewFile', fileToAppend)
    },
    /**
     * Get the uploaded file data and extract filepond serverId.
     */
    getServerResponse(data) {
      let file = JSON.parse(data)

      // Send the file to the queue to get appended
      // when upload is complete
      this.fileQueue.push(file)

      // Return what filepond will use as serverId
      return file.uuid
    },
  },
  components: {
    FilePond,
  },
}
</script>
