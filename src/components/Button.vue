<template>
  <span class="flex w-full rounded-md shadow-sm sm:w-auto">
    <button
      :type="nativeType"
      :form="form"
      class="relative inline-flex justify-center w-full rounded-md border px-4 py-2 text-base leading-6 font-medium shadow-sm focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5"
      :class="[
        color,
        {
          'opacity-50 cursor-not-allowed': disabled,
          'pointer-events-none': loading,
        },
      ]"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <span :class="{ 'opacity-0': loading }"><slot /></span>
      <svg
        v-show="loading"
        class="absolute top-1/2 right-1/2 -mt-3 -mr-3 h-6 w-6 animate-spin-bezier text-white opacity-75"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <path
          d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z"
        ></path>
      </svg>
    </button>
  </span>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'indigo',
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: value => {
        return ['button', 'submit', 'reset'].indexOf(value) >= 0
      },
    },
    disabled: Boolean,
    loading: Boolean,
    form: String,
  },
  computed: {
    color() {
      if (this.type === 'white') {
        return 'border-gray-300 bg-white text-gray-700 hover:text-gray-500 focus:border-blue-300 focus:shadow-outline-blue'
      }

      // TODO: This is not PrugeCSS friendly, this needs to be fixed
      return `border-transparent bg-${this.type}-600 text-white hover:bg-${this.type}-500 focus:outline-none focus:border-${this.type}-700 focus:shadow-outline-${this.type}`
    },
  },
}
</script>
