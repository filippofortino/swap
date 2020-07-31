<template>
  <MainLayout>
    <ItemContainer />
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import ItemContainer from '@/components/ItemContainer'

export default {
  name: 'Home',
  components: {
    MainLayout,
    ItemContainer,
  },
}
</script>
