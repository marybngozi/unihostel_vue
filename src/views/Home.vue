<template>
  <div>
    <Header active="home" class="sticky top-0"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue"

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
