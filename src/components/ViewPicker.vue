<template>
  <span class="inline-flex p-1 rounded bg-gray-100 border border-gray-200">
    <button
      @click="setViewMode('list')"
      class="w-1/2 inline-flex justify-center items-center px-2 py-1 space-x-2 rounded text-gray-600"
      :class="{ 'bg-white shadow': getViewMode('list') }"
    >
      <svg
        class="h-5 w-5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
      </svg>
      <span class="text-sm font-medium text-gray-900 sm:hidden">List</span>
    </button>
    <button
      @click="setViewMode('grid')"
      class="w-1/2 inline-flex justify-center items-center px-2 py-1 space-x-2 rounded text-gray-600"
      :class="{ 'bg-white shadow': getViewMode('grid') }"
    >
      <svg
        class="h-5 w-5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        ></path>
      </svg>
      <span class="text-sm font-medium text-gray-900 sm:hidden">Grid</span>
    </button>
  </span>
</template>

<script>
export default {
  name: 'ViewPicker',
  data() {
    return {
      viewMode: 'grid',
    }
  },
  methods: {
    setViewMode(mode) {
      this.viewMode = mode
    },
    getViewMode(mode) {
      return mode === this.viewMode
    },
  },
}
</script>
