<template>
  <section class="">
    <Header active="bookroom" class="sticky top-0"/>
    <Hostels />
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Hostels from "@/components/Hostels.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'BookRoom',
  components: {
    Header,
    Hostels,
    Footer
  }
}
</script>