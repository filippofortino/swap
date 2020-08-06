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
          id="folder-name"
          class="form-input block w-full sm:text-sm sm:leading-5"
          placeholder="Best folder ever"
        />
      </div>
      <div class="pt-3 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Create
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
export default {
  name: 'NewItemCreateFolderForm',
  computed: {
    currentFolder() {
      return this.$store.state.currentFolder
    },
  },
}
</script>
