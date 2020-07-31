<template>
  <div class="max-w-7xl w-full mx-auto flex-shrink-0 px-6 py-8">
    <div class="flex justify-center items-center space-x-1 text-gray-400">
      <span>Made with</span>
      <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span>
        by
        <a
          class="underline"
          href="https://github.com/filippofortino"
          target="_blank"
          rel="noopener"
        >
          Filippo Fortino
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
