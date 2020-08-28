<template>
  <div class="rounded-md shadow-sm">
    <button
      type="button"
      class="group w-full rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-indigo"
      :title="file.name"
    >
      <!-- If file have a preview image -->
      <div class="overflow-hidden rounded-t-md">
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
      </div>
      <div class="relative">
        <div class="p-3 rounded-b-md bg-white truncate sm:p-4">
          <span class="text-xs leading-tight font-semibold text-gray-600 sm:text-sm">
            {{ file.name }}
          </span>
        </div>
        <div
          class="absolute flex items-center top-0 right-0 h-full opacity-0 z-50 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200"
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
    </button>
  </div>
</template>

<script>
import Dropdown from '@/components/dropdown/Dropdown'
import DropdownItem from '@/components/dropdown/DropdownItem'

export default {
  name: 'FileItem',
  components: {
    Dropdown,
    DropdownItem,
  },
  props: ['file'],
}
</script>
