<template>
  <div v-on-clickaway="close" class="relative inline-block text-left">
    <div @click="toggle()" @keydown.esc="open = false" ref="trigger">
      <slot name="trigger" :open="open" />
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="open"
        @keydown.esc="open = false"
        class="origin-top-right absolute mt-2 w-64 rounded-md shadow-lg"
      >
        <div class="rounded-md bg-white shadow-xs">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'Dropdown',
  mixins: [clickaway],
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    close() {
      this.open = false
    },
  },
}
</script>
