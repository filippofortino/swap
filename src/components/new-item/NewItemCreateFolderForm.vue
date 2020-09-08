<template>
  <div class="space-y-6">
    <p class="text-center text-base leading-6 font-medium text-gray-500">
      Create a folder in <span class="font-semibold">"{{ currentFolder.name }}"</span>
    </p>
    <div
      v-show="genericErrorHappened"
      class="flex items-center justify-between py-3 px-3 rounded bg-red-100"
    >
      <div class="flex items-center space-x-2">
        <svg class="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p class="text-sm leading-5 font-medium text-red-900">
          Oh no! Something went wrong!
        </p>
      </div>
      <button @click="genericErrorHappened = false">
        <svg class="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div>
      <form @submit.prevent="createFolder()">
        <Input
          label="Folder name"
          placeholder="Type the folder name here"
          maxlength="80"
          v-model="folderName"
          :error="errorMessage ? true : false"
          :message="errorMessage || ''"
          :focus-on-mount="true"
          :select-on-mount="true"
        />

        <div class="pt-3 sm:flex sm:flex-row-reverse">
          <Button
            nativeType="submit"
            :disabled="isButtonDisabled"
            :loading="loading"
            @click="isButtonDisabled || createFolder()"
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Input from '../Input'
import Button from '../Button'

export default {
  name: 'NewItemCreateFolderForm',
  data() {
    return {
      folderName: 'untitled folder',
      loading: false,
      errorMessage: false,
      genericErrorHappened: false,
    }
  },
  computed: {
    currentFolder() {
      return this.$store.state.items.folder
    },
    isButtonDisabled() {
      return this.folderName < 1
    },
  },
  methods: {
    async createFolder() {
      this.loading = true

      try {
        const folder = await axios.post('https://api.swap.test/folders', {
          parent_folder: this.currentFolder.id,
          name: this.folderName,
        })
        this.$store.commit('appendNewFolder', folder.data)

        this.$emit('close-panel')
      } catch (e) {
        console.log(e)
        // If it's a validation error get the error message from the server
        if (e.response.status === 422) this.errorMessage = e.response.data.errors.name[0]
        // // Else just show a generic error message
        else this.genericErrorHappened = true
      } finally {
        this.loading = false
      }
    },
  },
  components: {
    Input,
    Button,
  },
}
</script>
