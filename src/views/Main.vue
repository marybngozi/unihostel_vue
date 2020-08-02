<template>
  <div id="app">
    <div id="nav">
      <NavTop/>
    </div>
    <Login/>
    <router-view/>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue'
import Login from '@/components/Login.vue'
export default {
  name: 'Main',
  components: {
    NavTop,
    Login
  }
}
</script>