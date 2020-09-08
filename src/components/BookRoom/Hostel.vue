<template>
    <div class="rounded-lg border shadow-lg pb-3 overflow-hidden">
        <!-- Images carousel sildes -->
        <carousel 
            class="" :per-page="1" 
            :autoplay="true" 
            :speed="1000"
            :autoplayTimeout="3000"
            paginationPosition="bottom-overlay" 
            :loop="true">
            <slide class="h-full" v-for="(image, index) in hostel.images" :key="index" :tagName="image.title">
                <div class="" style="height:20rem">
                    <img :src="image.url" :alt="image.title" class="w-full h-full object-cover object-center">
                </div>
                
                <h5 class="text-right text-black font-thin text-xs uppercase py-1 pr-2">{{ image.title }}</h5>
            </slide>
        </carousel>

        <!-- Title and buttons -->
        <div class="p-4">
            <div class="flex justify-between">
                <h4 class="uppercase text-md text-unidarkblue font-bold">{{ hostel.name }}</h4>
                <div class="space-x-1">
                    <span class="inline-block justify-end text-uniorange text-xs" v-for="(r, i) in 5" :key="i">
                        <i class="fa fa-star" v-if="r<=hostel.rating"></i>
                        <i class="far fa-star" v-else></i>
                    </span>
                </div>
            </div>

            <!-- Description -->
            <div class="text-gray-700">
                <p class="text-sm font-light text-justify">
                    {{ hostel.description }}
                </p>
            </div>

            <!-- Icons description -->
            <div class="flex justify-center space-x-10 mt-3 px-3">
                <div class="space-x-1 text-gray-600 text-xs">
                    <i class="fa fa-money-bill text-gray-500"></i>
                    <span>{{hostel.priceRange}}</span>
                </div>
                <div class="space-x-1 text-gray-600 text-xs">
                    <i class="fa fa-bed text-gray-500"></i>
                    <span>{{hostel.capacity}}</span>
                </div>
                <div class="space-x-1 text-gray-600 text-xs" >
                    <i class="fa fa-home text-gray-500" title="Price range"></i>
                    <span class="uppercase text-xs">{{hostel.category}}</span>
                </div>
            </div>

            <!-- View more button -->
            <div class="flex justify-end xs:mt-3 md:mt-2">
                <button class="bg-transparent outline-none hover:outline-none focus:outline-none text-unidarkblue">
                    <router-link to="/room">
                        <span class="px-3 font-semibold">View</span>
                        <i class="fa fa-long-arrow-alt-right font-thin w-48"></i>
                    </router-link>
                </button>
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