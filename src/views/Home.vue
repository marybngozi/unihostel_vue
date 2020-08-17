<template>
  <div class="home container-fluid p-0 m-0">
    <NavTop/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import NavTop from '@/components/NavTop.vue'

export default {
  name: 'Home',
  components: {
    NavTop,
    Login
  }
}
</script>
