<template>
  <div class="flex flex-col space-y-4">
    <div class="inline-flex rounded-md shadow">
      <button
        @click="$emit('select:action', 'upload')"
        class="w-full inline-flex items-center justify-center space-x-3 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
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
        <span>Click to upload</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewItemUploadForm',
}
</script>
