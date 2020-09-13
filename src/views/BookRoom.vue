<template>
  <section class="">
    <Header active="hostels" class="sticky top-0"/>
    <h2 class="text-center uppercase font-bold mt-3">Hostels</h2>
    <section class="mt-5 flex xs:flex-col lg:flex-row">
      <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0">
        <AsideLeft />
      </aside>
      <main class="lg:w-7/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-8 sm:mb-0 xs:order-first">
        <Hostels />
      </main>
      <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0 xs:order-last">
        <AsideRight />
      </aside>
    </section>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Hostels from "@/components/BookRoom/Hostels.vue"
import AsideLeft from "@/components/AsideLeft.vue"
import AsideRight from "@/components/AsideRight.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'BookRoom',
  components: {
    Header,
    Hostels,
    AsideLeft,
    AsideRight,
    Footer
  }
}
</script>