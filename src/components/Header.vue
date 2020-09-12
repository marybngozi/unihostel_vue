/* eslint-disable prettier/prettier */
<template>
  <header id="nav" class="unihostelFont shadow-xs">
    <div class="w-full flex justify-center items-center h-12 text-sm bg-unidarkblue text-white">
        <p class="p-2 font-thin">DISCIPLINE, SELF RELIANCE & EXCELLENCE</p>
    </div>
    <nav class="flex items-center justify-between flex-wrap bg-white p-4">
      <div class="flex justify-evenly space-x-4 items-center flex-shrink-0 text-white">
        <a href="/" alt="logo"> <img class="xs:w-10 md:w-12" src="../assets/images/uniziklogo.png"/></a>
        <div class="font-medium">
          <h1 class="text-unidark text-sm md:text-xl uppercase">Nnamdi Azikiwe University</h1>
          <h1 class="text-unidark text-sm md:text-xl uppercase">Hostel</h1>
        </div>
        
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center md:px-4 py-2 text-unidark hover:text-white hover:border-white"
          @click="toggleMenu"
        >
          <img src="../assets/images/menu-icon.svg" />
        </button>
      </div>
      <div
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        :class="showMenu ? 'block' : 'hidden'"
      >
        <div
          class="md:w-3/12 md:float-right text-sm block  lg:space-x-2 lg:flex-grow lg:flex lg:justify-center"
        >
          <a
            href="/"
            class="p-3 xs:flex xs:justify-center block mt-4 lg:inline-block lg:mt-0 text-unidark hover:border-b-2 md:mr-4"
            :class="active === 'home' ? 'active' : 'notActive'"
          >
            Home
          </a>
          <a
            href="/process"
            class="p-3 xs:flex xs:justify-center block mt-4 lg:inline-block lg:mt-0 text-unidark hover:border-b-2 md:mr-4"
            :class="active === 'process' ? 'active' : 'notActive'"
          >
            How it Works
          </a>
          <a
            href="/hostels"
            class="p-3 xs:flex xs:justify-center block mt-4 lg:inline-block lg:mt-0 text-unidark hover:border-b-2 md:mr-4"
            :class="active === 'hostels' ? 'active' : 'notActive'"
          >
            Book Room
          </a>
          <a
            href="/contact"
            class="p-3 xs:flex xs:justify-center block mt-4 lg:inline-block lg:mt-0 text-unidark hover:border-b-2 md:mr-4"
            :class="active === 'contact' ? 'active' : 'notActive'"
          >
            Contact
          </a>
          <a
            href="/faq"
            class="p-3 xs:flex xs:justify-center block mt-4 lg:inline-block lg:mt-0 text-unidark hover:border-b-2 md:mr-4"
            :class="active === 'faq' ? 'active' : 'notActive'"
          >
            FAQ
          </a>
          <a
            href="/login"
            v-show="!loggedIn"
            class="p-3 xs:flex xs:justify-center block mt-4 lg:inline-block lg:mt-0 text-unidark hover:border-b-2 md:mr-4"
            :class="(active === 'login' || active === 'signup') ? 'active' : 'notActive'"
          >
            <span v-if="active != 'signup'">Login</span>
            <span v-if="active == 'signup'">Sign Up</span>
          </a>
          <div class="p-1 mt-4 w-full lg:mt-0 xs:hidden sm:hidden lg:hidden md:flex justify-center items-center rounded-full border-unidark border md:mr-40">
          <input
            class="xs:flex xs:justify-center mx-auto inline-block text-sm leading-none border border-swizel-colorB rounded-full text-unidark border-white hover:border-swizel-colorA hover:text-white hover:bg-swizel-colorA"
            placeholder="search">
          <i class="fa fa-search" style=""></i>
        </div>
        </div>
        <div class="p-1 mt-4 lg:mt-0 w-56 mx-auto md:hidden lg:flex flex items-center rounded-full border-unidark border">
          <input
            class="xs:flex xs:justify-center mx-auto inline-block text-sm leading-none border border-swizel-colorB rounded-full text-unidark border-white hover:border-swizel-colorA hover:text-white hover:bg-swizel-colorA"
            placeholder="search">
          <i class="fa fa-search" style=""></i>
        </div>
      </div>
      <div v-show="loggedIn" class="bg-unidarkblue rounded-full h-10 w-10 ml-10">

    </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    active: {
      type: String
    }
  },
  data() {
    return {
      showMenu: false,
      loggedIn: false,
    };
  },
  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
.active {
  background: #0278F2;
  color: white;
}
#nav {
  z-index: 9999;
}
</style>
