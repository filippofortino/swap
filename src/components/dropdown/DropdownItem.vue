<template>
  <router-link
    :to="to"
    :title="title"
    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
    role="menuitem"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: ['to', 'title'],
}
</script>
