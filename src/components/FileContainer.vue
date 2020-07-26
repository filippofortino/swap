<template>
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
    <FileItem />
    <FileItem />
    <FileItem />
    <FileItem />
    <FileItem />
    <FileItem />
  </div>
</template>

<script>
import FileItem from './FileItem'

export default {
  name: 'FileContainer',
  components: {
    FileItem,
  },
}
</script>
