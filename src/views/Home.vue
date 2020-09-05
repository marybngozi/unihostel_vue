<template>
  <div>
    <Header active="home" class="sticky top-0"/>
    <Jumbotron />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Jumbotron from '@/components/Home/Jumbotron.vue'
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Jumbotron,
    Footer
  }
}
</script>
