<template>
  <div>
    <div class="py-4 flex items-center space-x-1 md:hidden">
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
      <a
        href="#"
        class="px-2 py-1 rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200"
        >Back</a
      >
    </div>
    <!-- Just for demo purposes, hide breadcrumbs on mobile -->
    <div class="hidden py-4 md:flex items-center space-x-1">
      <a
        href="#"
        class="px-2 py-1 rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200"
        >Home</a
      >
      <svg
        class="h-4 w-4 text-gray-400"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 5l7 7-7 7"></path>
      </svg>
      <a
        href="#"
        class="px-2 py-1 rounded leading-tight tracking-wide text-gray-500 font-semibold hover:bg-gray-200"
        >Subfolder</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
}
</script>
