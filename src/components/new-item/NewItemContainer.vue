<template>
  <div class="z-20">
    <NewItemButton
      v-show="showButton && !isPanelOpen && currentFolder"
      @open-button="isPanelOpen = true"
    />

    <!-- Overlay -->
    <transition
      enter-active-class="ease-out duration-200"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isPanelOpen"
        @click="isPanelOpen = false"
        class="fixed inset-0 transition-opacity md:hidden"
      >
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
    </transition>

    <NewItemPanel v-show="isPanelOpen" @close-panel="isPanelOpen = false" />
  </div>
</template>

<script>
import NewItemButton from './NewItemButton'
import NewItemPanel from './NewItemPanel'

export default {
  name: 'NewItemContainer',
  components: {
    NewItemButton,
    NewItemPanel,
  },
  data() {
    return {
      isPanelOpen: false,
      showButton: true,
      lastScrollPosition: 0,
    }
  },
  computed: {
    currentFolder() {
      return this.$store.state.items.folder
    },
  },
  methods: {
    onScroll() {
      const offset = 60
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition < 0) return
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < offset) return

      this.showButton = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
