<template>
  <div class="flex flex-col space-y-4">
    <div class="inline-flex rounded-md shadow">
      <button
        @click="$emit('select-action', 'upload')"
        class="w-full inline-flex items-center justify-center space-x-3 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        <svg
          class="h-6 w-6 text-white"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
        </svg>
        <span>Upload a file</span>
      </button>
    </div>
    <div class="inline-flex">
      <button
        @click="$emit('select-action', 'new-folder')"
        class="w-full inline-flex items-center justify-center space-x-3 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-red-700 bg-red-100 hover:text-red-600 hover:bg-red-50 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out"
      >
        <svg
          class="h-6 w-6 text-inerith"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          ></path>
        </svg>
        <span>Create a folder</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewItemSelectAction',
}
</script>
