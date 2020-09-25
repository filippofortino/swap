<template>
  <div
    class="group relative bg-white shadow-sm rounded-md border"
    :class="{ 'shadow-selected': selected }"
  >
    <router-link
      :to="`/folder/${folder.uuid}`"
      class="block w-full h-full rounded-md focus:outline-none focus:shadow-outline-indigo select-none"
      :title="folder.name"
    >
      <div class="p-3 sm:p-4">
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
    </router-link>
    <div
      class="absolute flex items-center top-0 right-0 h-full rounded-r-md bg-gradient-to-r from-transparent to-gray-200 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200"
      :class="{ 'opacity-100': selected }"
    >
      <button
        @click="toggleSelected()"
        type="button"
        class="mr-1 ml-3 transition-colors duration-200 focus:outline-none"
        :class="{
          'text-indigo-600': selected,
          'text-gray-400 hover:text-gray-500 focus:text-gray-500': !selected,
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
      tabindex="0"
      type="button"
      v-if="forceSelect"
      class="absolute group flex justify-end top-0 right-0 h-full w-full cursor-pointer focus:outline-none"
      @click="toggleSelected()"
    >
      <div
        class="flex items-center h-full rounded-r-md bg-gradient-to-r from-transparent to-gray-200"
      >
        <svg
          class="h-6 w-6 mr-1 ml-3 transition-colors duration-200"
          :class="{
            'text-indigo-600': selected,
            'text-gray-400 group-hover:text-gray-500': !selected,
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
  name: 'FolderItem',
  props: ['folder', 'selected', 'forceSelect'],
  methods: {
    toggleSelected() {
      if (this.selected) {
        this.$emit('item-unselected', this.folder)
      } else {
        this.$emit('item-selected', this.folder)
      }
    },
  },
}
</script>
