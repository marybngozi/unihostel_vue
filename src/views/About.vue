<template>
  <div class="about">
    <div id="nav">
      <NavTop/>
    </div>
    <h1 class="text-danger">This is an about page
      <i class="fa fa-eye"></i>
    </h1>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue'
export default {
  name: 'About',
  components: {
    NavTop
  }
}
</script>