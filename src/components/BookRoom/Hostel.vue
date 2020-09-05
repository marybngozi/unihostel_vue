<template>
    <div>
        <!-- Images carousel sildes -->
        <carousel class="">
            <slide class="" v-for="(image, index) in hostel.images" :key="index">
                <img :src="image.url" :alt="image.title">
                <p class="text-center">{{ image.title }}</p>
            </slide>
        </carousel>

        <!-- Description and buttons -->
        <div class="">
            <div class="text-unidarkblue-700">
                <p>
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

<style>

</style>