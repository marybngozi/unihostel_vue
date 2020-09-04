<template>
  <div>
    <Header active="home" class="sticky top-0"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NavTop from '@/components/NavTop.vue'

export default {
  name: 'Home',
  components: {
    NavTop,
    Header
  }
}
</script>
