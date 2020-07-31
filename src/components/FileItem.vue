<template>
  <a
    href="#"
    class="rounded-md shadow-sm border border-gray-300 overflow-hidden focus:outline-none focus:shadow-outline-indigo"
    :title="file.name"
  >
    <!-- If file have a preview image -->
    <img
      v-if="file.preview"
      class="h-28 w-full object-cover sm:h-32 md:h-36"
      :src="file.preview"
      :alt="file.name"
    />
    <!-- Else show an icon -->
    <div
      v-else
      class="h-28 flex justify-center items-center bg-gray-100 border-b border-gray-300 sm:h-32 md:h-36"
    >
      <svg
        class="h-14 w-14 text-gray-400"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        ></path>
      </svg>
    </div>
    <div class="p-3 bg-white truncate sm:p-4">
      <span class="text-xs leading-tight font-semibold text-gray-600 sm:text-sm">
        {{ file.name }}
      </span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'FileItem',
  props: ['file'],
}
</script>
