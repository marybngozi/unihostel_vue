<template>
  <section class="">
    <Header active="about" class="sticky top-0"/>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue"
export default {
  name: 'About',
  components: {
    Header,
    Footer
  }
}
</script>