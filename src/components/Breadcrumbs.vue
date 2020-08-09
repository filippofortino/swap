<template>
  <!-- <div class="py-4 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"> -->
  <div class="py-4 sm:w-5/6 sm:py-0">
    <div v-if="breadcrumbs">
      <!-- {{ formattedBreadcrumbs }} -->
      <!-- If not in "Home" -->
      <div class="flex items-center space-x-1 md:hidden">
        <!-- Show only back button on mobile -->
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
          class="px-2 py-1 rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
        >
          Back
        </router-link>
      </div>

      <div class="hidden md:flex items-center">
        <!-- Show full breadcrumbs on desktop -->
        <div class="flex items-center flex-shrink">
          <router-link
            to="/"
            class="px-2 py-1 rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            title="Home"
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
          class="flex items-center"
          :class="{
            'flex-shrink-0': Array.isArray(folder),
            'overflow-auto': !Array.isArray(folder),
          }"
          v-for="(folder, index) in formattedBreadcrumbs"
          :key="folder.id"
        >
          <!-- Render a dropdown when breadcrumbs are collapsed -->
          <Dropdown v-if="Array.isArray(folder)">
            <button
              slot="trigger"
              slot-scope="{ open }"
              type="button"
              id="options-menu"
              aria-haspopup="true"
              :aria-expanded="open"
              class="px-2 py-0.5 mx-0.5 mt-1 truncate rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            >
              <svg
                class="h-6 w-6 text-gray-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>

            <DropdownItem
              v-for="dFolder in folder"
              :key="dFolder.id"
              :to="`/folder/${dFolder.uuid}`"
              :title="dFolder.name"
              class="flex items-center space-x-3"
            >
              <svg
                class="h-6 w-6 flex-shrink-0 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                ></path>
              </svg>

              <span class="truncate">{{ dFolder.name }}</span>
            </DropdownItem>
          </Dropdown>

          <router-link
            v-else-if="!isLastItemOfArray(index, formattedBreadcrumbs)"
            :to="`/folder/${folder.uuid}`"
            class="px-2 py-1 truncate rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            :title="folder.name"
          >
            {{ folder.name }}
          </router-link>
          <!-- Last element should not be a link -->
          <span
            v-else
            class="px-2 py-1 truncate rounded leading-tight tracking-wide text-gray-500 font-semibold"
            :title="folder.name"
          >
            {{ folder.name }}
          </span>

          <!-- Do not show arrow if last item -->
          <svg
            v-if="!isLastItemOfArray(index, formattedBreadcrumbs)"
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
      <span
        class="px-2 py-1 rounded leading-tight tracking-wide text-gray-500 font-semibold"
        title="Home"
      >
        Home
      </span>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/dropdown/Dropdown'
import DropdownItem from '@/components/dropdown/DropdownItem'

export default {
  name: 'Breadcrumbs',
  components: {
    Dropdown,
    DropdownItem,
  },
  computed: {
    breadcrumbs() {
      return this.$store.state.items.breadcrumbs
    },
    previousFolder() {
      return this.breadcrumbs.slice(this.breadcrumbs.length - 2, this.breadcrumbs.length - 1)[0]
    },
    formattedBreadcrumbs() {
      const sliced = this.breadcrumbs.slice(1)
      /**
       * If items in breadcrumbs are five or more
       * collapse the breadcrumbs and create an array
       * of the middle folders to be displayed as a
       * dropdown.
       */
      if (this.breadcrumbs.length >= 5) {
        let dropdown = sliced.slice(0, sliced.length - 2)
        return [dropdown, sliced[sliced.length - 2], sliced[sliced.length - 1]]
      }

      return sliced
    },
  },
  methods: {
    getPreviousFolderPath() {
      return this.previousFolder.id === 1 ? '/' : `/folder/${this.previousFolder.uuid}`
    },
    isLastItemOfArray(index, array) {
      return index === array.length - 1
    },
  },
}
</script>
