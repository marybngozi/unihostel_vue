<template>
    <section>
        <carousel paginationActiveColor="#21618C" 
        v-bind:per-page="1"
        v-bind:autoplayTimeout="8000"
        v-bind:speed="1000"
        v-bind:autoplay="true"
        paginationPosition="bottom-overlay"
        v-bind:loop="true"> 
            <slide>
                <section id="slideA" class="w-screen h-jb px-10 py-32 md:px-32 md:py-10">
                    <h1 class="md:mt-40 px-4 text-5xl font-bold text-uniyellow flex flex-wrap">UNIVERSITY HOSTEL</h1>
                    <h2 class="px-4 text-xl font-thin text-white xs:mx-auto flex flex-wrap">Undergo your studies in a peaceful accommodation</h2>
                    <div class="px-4 space-x-4 flex p-4">
                        <button class="bg-blue-600 text-white rounded-lg text-xs p-4 w-36 h-10 flex items-center justify-center">
                            <router-link to="/hostels">BOOK A ROOM</router-link>
                        </button>
                        <button class="bg-white text-blue-600 rounded-lg text-xs p-4 w-36 h-10 flex items-center justify-center">
                            <router-link to="/contact">MAKE ENQUIRY</router-link>
                        </button>
                    </div>
                </section>
            </slide>
            <slide>
                <section id="slideA" class="w-screen h-jb px-10 py-32 md:px-32 md:py-10">
                    <h1 class="md:mt-40 px-4 text-5xl font-bold text-uniyellow flex flex-wrap">UNIVERSITY HOSTEL</h1>
                    <h2 class="px-4 text-xl font-thin text-white flex flex-wrap">Live in a secure, tranquile & serene environment</h2>
                    <div class="px-4 space-x-4 flex p-4">
                        <button class="bg-blue-600 text-white rounded-lg text-xs p-4 w-36 h-10 flex items-center justify-center">
                            <router-link to="/hostels">BOOK A ROOM</router-link>
                        </button>
                        <button class="bg-white text-blue-600 rounded-lg text-xs p-4 w-36 h-10 flex items-center justify-center">
                            <router-link to="/contact">MAKE ENQUIRY</router-link>
                        </button>
                    </div>
                </section>
            </slide>
            <slide>
                <section id="slideA" class="w-screen h-jb px-10 py-32 md:px-32 md:py-10">
                    <h1 class="md:mt-40 px-4 text-5xl font-bold text-uniyellow flex flex-wrap">UNIVERSITY HOSTEL</h1>
                    <h2 class="px-4 text-xl font-thin text-white flex flex-wrap">24/7 water and power supply assured</h2>
                    <div class="px-4 space-x-4 flex p-4">
                        <button class="bg-blue-600 text-white rounded-lg text-xs p-4 w-36 h-10 flex items-center justify-center">
                            <router-link to="/hostels">BOOK A ROOM</router-link>
                        </button>
                        <button class="bg-white text-blue-600 rounded-lg text-xs p-4 w-36 h-10 flex items-center justify-center">
                            <router-link to="/contact">MAKE ENQUIRY</router-link>
                        </button>
                    </div>
                </section>
            </slide>
        </carousel>
    </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    name: "Jumbotron",
    components: {
        Carousel,
        Slide  
    }
}
</script>

<style scoped>
#slideA{
    background:linear-gradient(rgba(11, 36, 70, 0.918), rgba(10, 33, 83, 0.541)), url('../../assets/images/slide1.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}
.h-jb{
    height: 520px;
}
</style>