<template>
    <section>
        <div class="shadow-lg p-4">
            <!-- <carousel 
            class="" :per-page="1" 
            :autoplay="true" 
            :speed="1000"
            :autoplayTimeout="3000"
            paginationPosition="bottom-overlay" 
            :loop="true">
            <slide class="h-full" v-for="(image, index) in this.$route.hostel.hostelImg" :key="index" :tagName="image.title">
                <div class="" style="height:20rem">
                    <img 
                    :src="image.url" 
                    :alt="image.title" 
                    class="w-full h-full object-cover object-center bg-gray-300"
                    >
                </div>
                
                <h5 class="text-right text-black font-thin text-xs uppercase py-1 pr-2">{{ image.title }}</h5>
            </slide>
        </carousel> -->
            <h2 class="flex justify-start font-light text-unidarkblue text-2xl">{{hostelName}}</h2>
            <p class="flex justify-start font-light text-sm text-gray-800">{{hostelDescription}}</p>

            <div>
                <label class="mr-2 text-gray-500 font-light">Select Floor</label>
                 <select class="px-2 py-1 mt-2 text-sm bg-unidarkblue text-white font-light rounded-full" name="selectFloor" required>
                    <option value="0">Ground Floor</option>
                    <option value="1">First Floor</option>
                    <option value="2">Second Floor</option>
                </select>
            </div>

            <img class="mt-5" src="https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599891484/floor_plan_-_A_l0fixu.png" alt="">

            <div class="w-40 rounded-full text-white px-3 py-2 mt-10 mx-auto bg-orange-600">
                <router-link class="flex justify-center items-center" to="/room">
                Proceed
            </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    name: "FloorDetails",
    components: {
        Carousel,
        Slide
    },
    props: {
        hostelName: {
            type: String,
            required: true
        },
        hostelDescription: {
            type: String,
            required: true
        },
        // hostelImg: {
        //     type: Object,
        //     required: true
        // },
        category: {
            type: String,
            required: true
        }
    },
    // data() {
    //     return{
    //         hostelImg: this.$route.hostelImg
    //     }
    // }
}
</script>