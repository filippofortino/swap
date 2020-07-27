<template>
  <div class="home">
    <Header />
    <div class="max-w-7xl mx-auto px-4 space-y-6 sm:px-6">
      <div
        class="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:border-b-2 sm:border-gray-100"
      >
        <Breadcrumbs />
        <ViewPicker />
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Breadcrumbs from '@/components/Breadcrumbs'
import ViewPicker from '@/components/ViewPicker'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Breadcrumbs,
    ViewPicker,
  },
}
</script>
