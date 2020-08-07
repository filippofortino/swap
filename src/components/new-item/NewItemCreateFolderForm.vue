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
      <label for="folder-name" class="block text-sm leading-5 font-medium text-gray-700"
        >Folder name</label
      >
      <div class="mt-1 relative rounded-md shadow-sm">
        <div
          v-show="errorMessage"
          class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
        >
          <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          v-model="folderName"
          ref="input"
          id="folder-name"
          class="form-input block w-full sm:text-sm sm:leading-5 pr-10"
          :class="{
            'text-red-900 border-red-500 focus:border-red-500 focus:shadow-outline-red': errorMessage,
          }"
          placeholder="Type the folder name here"
          maxlength="80"
        />
      </div>
      <p v-show="errorMessage" class="mt-1 text-sm leading-5 font-medium text-red-500">
        {{ errorMessage }}
      </p>

      <div class="pt-3 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:w-auto">
          <button
            @click="isButtonDisabled || createFolder()"
            type="button"
            class="relative inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            :class="{
              'opacity-50 cursor-not-allowed': isButtonDisabled,
              'pointer-events-none': loading,
            }"
            :disabled="isButtonDisabled"
          >
            <span :class="{ 'opacity-0': loading }">Create</span>
            <svg
              v-show="loading"
              class="absolute top-1/2 right-1/2 -mt-3 -mr-3 h-6 w-6 animate-spin-bezier text-white opacity-75"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path
                d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z"
              ></path>
            </svg>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

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
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus()
      this.$refs.input.select()
    })
  },
}
</script>
