<template>
  <section class="">
    <Header active="bookroom" class="sticky top-0"/>
    <h2 class="text-center uppercase">Hostels</h2>
    <section class="mt-10 flex justify-evenly">
      <aside class="w-1/6">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eum animi dolores sequi molestiae velit est iure earum recusandae, dolor, commodi porro amet odit atque tempore debitis cupiditate vel ipsa?
        </p>
      </aside>
      <main class="w-3/6">
        <Hostels />
      </main>
      <aside class="w-1/6">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eum animi dolores sequi molestiae velit est iure earum recusandae, dolor, commodi porro amet odit atque tempore debitis cupiditate vel ipsa?
        </p>
      </aside>
    </section>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Hostels from "@/components/BookRoom/Hostels.vue"
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