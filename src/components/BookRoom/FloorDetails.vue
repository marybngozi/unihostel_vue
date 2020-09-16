<template>
    <section>
        <div class="shadow-lg p-4">
            <img class="w-full py-4" :src="hostelImg" alt="">
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

            <div class="mt-5 flex justify-center">
                <img src="https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599891484/floor_plan_-_A_l0fixu.png" alt="">

            </div>
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
        hostelImg: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
}
</script>