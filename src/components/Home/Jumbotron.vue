<template>
    <section>
        <carousel paginationActiveColor="#377781"> 
            <slide>
                <section id="slideA" class="w-screen h-screen p-4">
                    <h1 class="mt-20 px-4 text-5xl font-bold text-yellow-400">UNIVERSITY HOSTEL</h1>
                    <h2 class="w-3/4 px-4 text-3xl font-regular text-white">Undergo your studies in a peaceful accommodation</h2>
                    <div class="px-4 space-x-4">
                        <button class="bg-blue-600 text-white">
                            BOOK A ROOM
                        </button>
                        <button class="bg-white text-blue-600">
                            MAKE ENQUIRY
                        </button>
                    </div>
                </section>
            </slide>
            <slide>
                <section id="slideA" class="w-screen h-screen p-4">
                    <h1 class="mt-20 px-4 text-5xl font-bold text-yellow-400">UNIVERSITY HOSTEL</h1>
                    <h2 class="px-4 text-4xl font-bold text-white">Undergo your studies in a <br>peaceful accommodation</h2>
                    <div class="px-4 space-x-4">
                        <button class="bg-blue-600 text-white">
                            BOOK A ROOM
                        </button>
                        <button class="bg-white text-blue-600">
                            MAKE ENQUIRY
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
    background:transparent url('../../assets/images/slide1.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}
</style>