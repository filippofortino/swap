<template>
  <MainLayout>
    <FileContainer />
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import FileContainer from '@/components/FileContainer'

export default {
  name: 'Home',
  components: {
    MainLayout,
    FileContainer,
  },
}
</script>
