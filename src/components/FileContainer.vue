<template>
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
    <Item class="list-complete-item" v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
<script>
import axios from 'axios'
import Item from './Item'

export default {
  name: 'FileContainer',
  data() {
    return {
      items: null,
    }
  },
  components: {
    Item,
  },
  methods: {
    async getItems() {
      try {
        const items = await axios.get('/api/items')
        console.log(items.data.items)
        this.items = items.data.items
      } catch (e) {
        console.error(e)
      }
    },
  },
  mounted() {
    this.getItems()
  },
}
</script>
