<template>
  <div>
    <Header active="home" class="sticky top-0"/>
    <Jumbotron />
    <Features />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Jumbotron from '@/components/Home/Jumbotron.vue'
import Features from '@/components/Home/Features.vue'
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Jumbotron,
    Features,
    Footer
  }
}
</script>
