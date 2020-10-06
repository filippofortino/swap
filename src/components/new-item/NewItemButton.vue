<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-class="transform opacity-0 scale-50"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-50"
  >
    <button
      @click="$emit('open-button')"
      class="fixed bottom-8 right-5 md:right-8 rounded-full bg-red-600 shadow-lg hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
    >
      <div class="flex items-center p-3 space-x-3 text-white rounded-full shadow-xs md:p-4">
        <svg
          class="h-7 w-7"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 4v16m8-8H4"></path>
        </svg>
        <span class="hidden text-lg font-medium md:inline-block ">Nuovo</span>
      </div>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'NewItemButton',
}
</script>
