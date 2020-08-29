<template>
  <div class="relative group rounded-md shadow-sm">
    <router-link
      :to="`/folder/${folder.uuid}`"
      class="block rounded-md shadow-sm border border-gray-300 overflow-hidden focus:outline-none focus:shadow-outline-indigo select-none"
      :title="folder.name"
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
    </router-link>
    <div
      class="absolute flex items-center top-0 right-0 h-full opacity-0 z-10 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200"
    >
      <Dropdown>
        <button
          slot="trigger"
          slot-scope="{ open }"
          type="button"
          id="options-menu"
          aria-haspopup="true"
          :aria-expanded="open"
          class="px-0.5 py-2 mr-0.5 truncate rounded leading-tight tracking-wide text-gray-500 bg-white font-semibold hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
        >
          <svg
            class="h-6 w-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <DropdownItem to="#" title="title" class="flex items-center space-x-3">
          Item 1
        </DropdownItem>
        <DropdownItem to="#" title="title" class="flex items-center space-x-3">
          Item 2
        </DropdownItem>
        <DropdownItem to="#" title="title" class="flex items-center space-x-3">
          Item 3
        </DropdownItem>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/dropdown/Dropdown'
import DropdownItem from '@/components/dropdown/DropdownItem'

export default {
  name: 'FolderItem',
  components: {
    Dropdown,
    DropdownItem,
  },
  props: ['folder'],
}
</script>
