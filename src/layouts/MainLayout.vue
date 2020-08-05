<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-auto max-w-7xl w-full mx-auto px-4 pb-20 space-y-6 sm:px-6">
      <div
        class="flex flex-col sm:py-2 sm:flex-row sm:justify-between sm:items-center sm:border-b-2 sm:border-gray-100"
      >
        <Breadcrumbs />
        <ViewPicker />
      </div>

      <slot />
    </div>
    <Footer />

    <NewItemContainer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ViewPicker from '@/components/ViewPicker'
import Breadcrumbs from '@/components/Breadcrumbs'
import NewItemContainer from '@/components/new-item/NewItemContainer'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Breadcrumbs,
    ViewPicker,
    Footer,
    NewItemContainer,
  },
}
</script>
