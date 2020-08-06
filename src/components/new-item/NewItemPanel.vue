<template>
  <transition
    enter-active-class="transform transition ease-out duration-300"
    enter-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transform transition ease-in duration-200"
    leave-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div class="fixed bottom-0 right-0 w-full md:w-96 md:bottom-8 md:right-8">
      <div class="rounded-t-lg shadow-lg md:rounded-lg">
        <div class="rounded-t-lg shadow-xs bg-white md:rounded-lg">
          <div class="pt-6 pb-8 px-5 space-y-6">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <button
                  v-show="action"
                  @click="action = null"
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <p class="text-lg font-medium leading-6 text-gray-700">
                  Create new
                </p>
              </div>
              <button
                @click="$emit('close-panel')"
                type="button"
                class="hidden md:inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="space-y-8">
              <NewItemSelectAction v-if="!action" @select-action="action = $event" />
              <NewItemUploadForm v-else-if="action === 'upload'" />
              <NewItemCreateFolderForm v-else-if="action === 'new-folder'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import NewItemSelectAction from './NewItemSelectAction.vue'
import NewItemUploadForm from './NewItemUploadForm'
import NewItemCreateFolderForm from './NewItemCreateFolderForm'

export default {
  name: 'NewItemPanel',
  data() {
    return {
      action: null,
    }
  },
  components: {
    NewItemSelectAction,
    NewItemUploadForm,
    NewItemCreateFolderForm,
  },
  computed: {},
}
</script>
