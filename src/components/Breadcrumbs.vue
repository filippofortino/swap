<template>
  <div class="py-4">
    <div v-if="breadcrumbs">
      <div class="flex items-center space-x-1 md:hidden">
        <svg
          class="h-4 w-4 text-gray-400"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
        <router-link
          :to="getPreviousFolderPath()"
          class="px-2 py-1 rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200"
        >
          Back
        </router-link>
      </div>

      <div class="hidden md:flex items-center">
        <div class="flex items-center flex-shrink-0 space-x-1">
          <router-link
            to="/"
            class="px-2 py-1 rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200"
          >
            Home
          </router-link>
          <svg
            class="h-4 w-4 flex-shrink-0 text-gray-400"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        <div
          class="flex items-center flex-shrink-0 space-x-1"
          v-for="(folder, index) in breadcrumbs.slice(1)"
          :key="folder.id"
        >
          <router-link
            v-if="index !== breadcrumbs.slice(1).length - 1"
            :to="`/folder/${folder.uuid}`"
            class="px-2 py-1 flex-shrink-0 rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200"
          >
            {{ folder.name }}
          </router-link>
          <span
            v-else
            class="px-2 py-1 flex-shrink-0 rounded leading-tight tracking-wide text-gray-500 font-semibold"
          >
            {{ folder.name }}
          </span>
          <svg
            v-if="index !== breadcrumbs.slice(1).length - 1"
            class="h-4 w-4 flex-shrink-0 text-gray-400"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
    <div v-else class="flex">
      <span class="px-2 py-1 rounded leading-tight tracking-wide text-gray-500 font-semibold">
        Home
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    breadcrumbs() {
      return this.$store.state.breadcrumbs
    },
    previousFolder() {
      return this.breadcrumbs.slice(this.breadcrumbs.length - 2, this.breadcrumbs.length - 1)[0]
    },
  },
  methods: {
    getPreviousFolderPath() {
      return this.previousFolder.id === 1 ? '/' : `/folder/${this.previousFolder.uuid}`
    },
  },
}
</script>
