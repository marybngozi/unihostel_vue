<template>
    <section>
        <div class="shadow-lg p-4">
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
                        <img 
                        :src="image.url" 
                        :alt="image.title" 
                        class="w-full h-full object-cover object-center bg-gray-300"
                        >
                    </div>
                    
                    <h5 class="text-right text-black font-thin text-xs uppercase py-1 pr-2">{{ image.title }}</h5>
                </slide>
            </carousel>
            <h2 class="flex justify-start font-light text-unidarkblue text-2xl">{{hostel.name}}</h2>
            <p class="flex justify-start font-light text-sm text-gray-800">{{hostel.description}}</p>

            <div class="flex justify-start mt-4">
                <label class="mr-2 mt-1 text-gray-800 md:text-md xs:text-sm font-regular"> Select Floor<span class="text-red-700">*</span></label>
                <div class="flex justify-evenly border border-unidarkblue rounded overflow-hidden w-auto h-auto">
                    <select class="xs:w-32 xs:h-8 w-40 px-3 py-2 text-sm hover:outline-none text-unidarkblue font-light" name="selectFloor" v-model="floorNum" required>
                        <option value="-1">- select floor -</option>
                        <option v-for="(floor,i) in floors" :key="i" class="text-xl" :value="i">{{floor.name}}</option>
                    </select>
                    <button title="Search" @click="findFloor()" class="text-unidarkblue hover:outline-none px-3 border-l-2">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>

            <div class="mt-8 border-t-2" v-if="floor.plan">
                <h3 class="uppercase my-2 xs:text-xs md:text-sm">{{floor.name}} Plan</h3>
                <div class="flex justify-center">
                    <img :src="floor.plan" :alt="floor.name">
                </div>
            </div>

            <div class="p-2 overflow-auto mt-5" v-if="floor.plan">
                <table class="table table-auto mx-auto w-full border">
                    <thead class="bg-gray-200 text-gray-700">
                        <tr class="text-xs text-center divide-x">
                            <th class="px-2 py-2">Room</th>
                            <th class="px-2 py-2">Status</th>
                            <th class="px-2 py-2">Amount</th>
                            <th class="px-2 py-2">Room Type</th>
                            <th class="px-2 py-2">Capacity</th>
                            <th class="px-1 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <tr class="text-xs text-gray-600 hover:bg-gray-100 border-b border-gray-200 py-10 divide-x" v-for="(room, i) in floor.rooms" :key="i">
                            <td class="px-2 py-2">{{room.name}}</td>
                            <td class="px-2 py-2 ">
                                <span v-if="room.status == 1">Vacancy Avaiable</span>
                                <span v-else>Filled Up</span>
                            </td>
                            <td class="px-2 py-2 ">&#8358;{{formatMoney(room.price)}}</td>
                            <td class="px-2 py-2 ">{{room.type}}</td>
                            <td class="px-2 py-2 ">{{ room.capacity }}</td>
                            <td class="px-1 py-2 flex justify-center">
                                <button
                                class="bg-blue-600 text-white rounded-full text-xs py-1 px-2 w-auto flex items-center justify-center mr-3">
                                    <router-link :to="{
                                        name: 'Room',
                                        params: {roomid: 3}
                                    }" ><!--  Update the number 3 to room id on later -->
                                    View
                                    </router-link>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        hostel: {
            type: Object
        },
        floors: {
            type: Array
        }
    },
    data() {
        return{
            floorNum: -1,
            floor: {
                plan: null
            }
        }
    },
    methods: {
        formatMoney(money) {
            return Number(money).toLocaleString('en-US')
        },
        findFloor() {
            if (this.floorNum >= 0) {
                this.floor = this.floors.find((f, i) => i == this.floorNum);
            }
        },
        showBackOrder(bed) {
            this.$moment()
        },
    }
}
</script>