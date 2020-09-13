/* eslint-disable prettier/prettier */
<template>
  <header id="nav" class="unihostelFont shadow-xs">
    <div class="w-full flex justify-center items-center h-12 text-sm bg-unidarkblue text-white">
        <p class="p-2 font-thin">DISCIPLINE, SELF RELIANCE & EXCELLENCE</p>
    </div>
    <nav class="flex items-center justify-between flex-wrap bg-white p-4">
      <div class="flex justify-evenly md:space-x-4 xs:space-x-1 items-center flex-shrink-0 text-white">
        <a href="/" alt="logo"> <img class="xs:w-8 md:w-12" src="../assets/images/uniziklogo.png"/></a>
        <div class="font-medium">
          <h1 class="text-unidark text-sm md:text-xl xs:text-xs uppercase">Nnamdi Azikiwe University</h1>
          <h1 class="text-unidark text-sm md:text-xl xs:text-xs uppercase">Hostel</h1>
        </div>
        
      </div>
      <div class="block lg:hidden flex justify-between sm:space-x-3 xs:space-x-0">
        <!-- User pics medium screen -->
        <ProfileMenu
        class="mt-2"
        v-show="loggedIn"
        whdiv="h-8 w-8"
        />
        <button
          class="flex items-center px-2 py-2 text-unidark hover:text-white hover:border-white focus:outline-none"
          @click="toggleMenu"
        >
          <img src="../assets/images/menu-icon.svg" class="lg:h-10 lg:w-10 xs:w-6 xs:h-6" />
        </button>
        <button v-if="showMenu" @click="showMenu = false" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default"></button>
      </div>
      
      <div
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        :class="showMenu ? 'block' : 'hidden'"
      >
        <div
          class="md:w-5/12 xs:w-8/12 xs:pb-5 xs:rounded xs:shadow-xl lg:shadow-none lg:pb-auto xs:absolute xs:right-0 xs:bg-white text-sm block lg:relative lg:space-x-2 lg:flex-grow lg:flex lg:justify-center"
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

          <!-- Hide this search input for large screen-->
          <div class="p-1 pr-3 mt-4 mx-auto w-10/12 lg:hidden xs:flex justify-center items-center rounded-full border-unidark border">
            <input
              class="flex justify-between mx-auto text-sm leading-none border rounded-full text-unidark border-white hover:text-white"
              placeholder="search">
            <i class="fa fa-search" style=""></i>
          </div>
        </div>

        <!-- Show this search input for lg to xl screen-->
        <div class="p-1 pr-3 mt-4 lg:mt-0 w-56 mx-auto xs:hidden lg:flex flex items-center rounded-full border-unidark border">
          <input
            class="xs:flex xs:justify-center mx-auto inline-block text-sm leading-none border rounded-full text-unidark border-white hover:text-white focus:outline-none"
            placeholder="search">
          <i class="fa fa-search" style=""></i>
        </div>
      </div>

      <!-- User pics large screen-->
      <ProfileMenu 
      class="ml-10 xs:hidden lg:block"
      v-show="loggedIn"
      whdiv="h-10 w-10"
      />
    </nav>
  </header>
</template>

<script>
import ProfileMenu from "@/components/ProfileMenu.vue"
export default {
  name: "Header",
  components: {
    ProfileMenu
  },
  props: {
    active: {
      type: String
    }
  },
  data() {
    return {
      showMenu: false,
      loggedIn: true,
    };
  },
  created(){
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key == "Escape") {
        this.showMenu = false;
      }
    }

    document.addEventListener('keydown', handleEscape);

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape);
    })
  },
  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu;
    },
    showProfileMenu(){

    }
  }
};
</script>

<style scoped>
.active {
  background: #3182ce;
  color: white;
}
#nav {
  z-index: 9999;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
