<template>
  <section class="">
    <Header active="process" class="sticky top-0"/>
    <section class="mt-5 flex xs:flex-col md:flex-row">
      <aside class="md:w-2/12 md:flex-none md:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0">
        <AsideLeft />
      </aside>
      <main class="md:w-7/12 md:flex-none md:order-none xs:w-11/12 xs:mx-auto xs:mb-8 sm:mb-0 xs:order-first">
        <div class="">
          <!-- Book room process -->
          <h1 class="font-bold">How to Book a Room in the University Hostel</h1>
          <ul class="mt-4 text-sm">
            <li class="tracking-wide py-1"><span>1.</span> <router-link class="font-semibold cursor-pointer" to="/signup">Sign up</router-link> with your Student Registration Number</li>
            <li class="tracking-wide py-1"><span>2.</span> <router-link class="font-semibold cursor-pointer" to="/signup">Login</router-link> in into your account</li>
            <li class="tracking-wide py-1"><span>3.</span> Go to <router-link class="font-semibold cursor-pointer" to="/hostels">Book Room</router-link> and select a Hostel</li>
            <li class="tracking-wide py-1"><span>4.</span> Proceed accordingly to select a Bed Space</li>
            <li class="tracking-wide py-1"><span>5.</span> Make payments using the RRR generated</li>
            <li class="tracking-wide py-1"><span>6.</span> After 24 hours, if payment is not made, the reserved space will be open</li>
          </ul>
        </div>

        <div class="mt-16">
          <!-- Back order process -->
          <h1 class="font-bold">How to Back Order a Room in the University Hostel</h1>
          <ul class="mt-4 text-sm">
            <li class="tracking-wide py-1"><span>1.</span> <router-link class="font-semibold cursor-pointer" to="/signup">Sign up</router-link> with your Student Registration Number</li>
            <li class="tracking-wide py-1"><span>2.</span> <router-link class="font-semibold cursor-pointer" to="/signup">Login</router-link> in into your account</li>
            <li class="tracking-wide py-1"><span>3.</span> Go to <router-link class="font-semibold cursor-pointer" to="/hostels">Book Room</router-link> and select a Hostel</li>
            <li class="tracking-wide py-1"><span>4.</span> Proceed accordingly to select a Room</li>
            <li class="tracking-wide py-1"><span>6.</span> Proceed accordingly to select a Room</li>
            <li class="tracking-wide py-1"><span>7.</span> Make payments using the RRR generated</li>
            <li class="tracking-wide py-1"><span>8.</span> After 24 hours, if payment is not made, the reserved space will be open</li>
          </ul>
        </div>
      </main>
      <aside class="md:w-2/12 md:flex-none md:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0 xs:order-last">
        <AsideRight />
      </aside>
    </section>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import AsideLeft from "@/components/AsideLeft.vue"
import AsideRight from "@/components/AsideRight.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'Process',
  components: {
    Header,
    AsideLeft,
    AsideRight,
    Footer
  }
}
</script>