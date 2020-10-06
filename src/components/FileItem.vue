<template>
  <div
    class="group relative shadow-sm rounded-md border overflow-hidden"
    :class="{ 'shadow-selected': selected }"
  >
    <button
      type="button"
      class="block w-full h-full rounded-md focus:outline-none focus:shadow-outline-red"
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
      <div class="p-3 bg-white text-left truncate sm:p-4">
        <span class="text-xs leading-tight font-semibold text-gray-600 sm:text-sm">
          {{ file.name }}
        </span>
      </div>
    </button>

    <div
      class="absolute flex justify-end top-0 right-0 w-full rounded-t-md bg-gradient-to-b from-gray-500 to-transparent opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200"
      :class="{ 'opacity-100': selected }"
    >
      <button
        @click="toggleSelected()"
        type="button"
        class="mt-2 mr-2 mb-4 transition-colors duration-200 focus:outline-none"
        :class="{
          'text-red-600': selected,
          'text-gray-200 hover:text-white focus:text-white': !selected,
        }"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
    <button
      type="button"
      v-if="forceSelect"
      class="absolute group flex justify-end top-0 right-0 w-full h-full focus:outline-none"
      @click="toggleSelected()"
    >
      <div
        class="flex justify-end w-full rounded-t-md bg-gradient-to-b from-gray-500 to-transparent"
      >
        <svg
          class="h-6 w-6 mt-2 mr-2 mb-4 transition-colors duration-200"
          :class="{
            'text-red-600': selected,
            'text-gray-200 group-hover:text-white': !selected,
          }"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FileItem',
  props: ['file', 'selected', 'forceSelect'],
  methods: {
    toggleSelected() {
      if (this.selected) {
        this.$emit('item-unselected', this.file)
      } else {
        this.$emit('item-selected', this.file)
      }
    },
  },
}
</script>
