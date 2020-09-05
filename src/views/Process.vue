<template>
  <section class="">
    <Header active="process" class="sticky top-0"/>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue"
export default {
  name: 'Process',
  components: {
    Header,
    Footer
  }
}
</script>