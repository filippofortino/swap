<template>
  <div>
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm leading-5 font-medium text-gray-700"
      :class="{ 'sr-only': labelSrOnly }"
    >
      {{ label }}
    </label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        v-show="error"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        :id="inputId"
        ref="input"
        class="form-input block w-full sm:text-sm sm:leading-5 pr-10"
        :class="{
          'text-red-900 border-red-500 focus:border-red-500 focus:shadow-outline-red': error,
        }"
        :value="value"
        @input="updateValue($event.target.value)"
        :placeholder="placeholder"
        :maxlength="maxlength"
      />
    </div>
    <p
      v-show="message"
      class="mt-1 text-sm leading-5 font-medium"
      :class="{ 'text-red-500': error, 'text-gray-500': !error }"
    >
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
      default: null,
    },
    error: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      defautl: null,
    },
    labelSrOnly: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    maxlength: {
      type: String,
      default: null,
    },
    focusOnMount: {
      type: Boolean,
      default: false,
    },
    selectOnMount: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
    generateRandomString() {
      return (
        Math.random()
          .toString(36)
          .substring(2, 5) +
        Math.random()
          .toString(36)
          .substring(2, 5)
      )
    },
  },
  computed: {
    inputId() {
      return this.id || this.generateRandomString()
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.focusOnMount) this.$refs.input.focus()
      if (this.selectOnMount) this.$refs.input.select()
    })
  },
}
</script>
