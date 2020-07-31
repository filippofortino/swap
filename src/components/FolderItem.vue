<template>
  <div
    class="rounded-md shadow-sm border border-gray-300 overflow-hidden focus:outline-none focus:shadow-outline-indigo select-none"
  >
    <div class="p-3 bg-white sm:p-4">
      <div class="flex items-center space-x-2">
        <svg
          class="h-6 w-6 flex-shrink-0 text-gray-700 sm:h-7 sm:w-7"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
        </svg>
        <span class="text-xs font-semibold text-gray-600 truncate sm:text-sm">
          {{ folder.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FolderItem',
  props: ['folder'],
}
</script>
