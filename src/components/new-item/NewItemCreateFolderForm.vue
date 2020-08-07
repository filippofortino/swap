<template>
  <div class="space-y-6">
    <p class="text-center text-base leading-6 font-medium text-gray-500">
      Create a folder in <span class="font-semibold">"{{ currentFolder.name }}"</span>
    </p>
    <div>
      <label for="folder-name" class="block text-sm leading-5 font-medium text-gray-700"
        >Folder name</label
      >
      <div class="mt-1 relative rounded-md shadow-sm">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
        <input
          v-model="folderName"
          ref="input"
          id="folder-name"
          class="form-input block w-full sm:text-sm sm:leading-5"
          placeholder="Type the folder name here"
          maxlength="80"
        />
      </div>
      <div class="pt-3 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
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
        <!-- <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Cancel
          </button>
        </span> -->
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
    }
  },
  computed: {
    currentFolder() {
      return this.$store.state.items.folder
    },
    isButtonDisabled() {
      // return this.folderName < 1
      return false
    },
  },
  methods: {
    async createFolder() {
      this.loading = true

      try {
        const response = await axios.post('https://api.swap.test/folders', {
          parent_folder: this.currentFolder.id,
          name: this.folderName,
        })

        console.log(response.data)
      } catch (e) {
        this.errorMessage = e.response.data.errors.name[0]
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
