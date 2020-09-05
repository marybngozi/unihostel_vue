<template>
    <div class="rounded shadow-lg py-3 overflow-hidden">
        <!-- Images carousel sildes -->
        <carousel 
            class="" per-page="1" 
            :autoplay="true" 
            :speed="1000"
            :autoplayTimeout="3000"
            paginationPosition="bottom-overlay" 
            :loop="true">
            <slide class="" v-for="(image, index) in hostel.images" :key="index">
                <div class="rounded h-img">
                    <img :src="image.url" :alt="image.title" class="">
                </div>
                <h5 class="text-right text-white font-bold text-xs uppercase shadow py-1 pr-2">{{ image.title }}</h5>
            </slide>
        </carousel>

        <!-- Title Description and buttons -->
        <div class="p-4">
            <h4 class="text-center uppercase text-xl text-gray-700 font-bold mx-auto">
                {{ hostel.name }}
            </h4>
            <div class="text-unidarkblue-700">
                <p class="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi illum qui quisquam consectetur quam debitis neque iure, adipisci quibusdam culpa reiciendis eos reprehenderit nobis quod tenetur repudiandae totam, distinctio facilis.
                </p>
            </div>

            <div class="">

            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    name: "Hostel",
    components: {
        Carousel, Slide
    },
    props: {
        hostel: {
            type: Object
        }
    },

}
</script>

<style scoped>
    .h-img{
        height: 400px;
    }
</style>