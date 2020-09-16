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

            <div class="p-2 overflow-auto mt-5">
            <table class="table table-auto mx-auto w-full border">
                <thead class="bg-gray-200 text-gray-700">
                    <tr class="text-xs text-center divide-x">
                        <!-- <th class="px-1 py-2">S/N</th> -->
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
                        <!-- <td class="px-1 py-2 ">{{ i+1 }}</td> -->
                        <td class="px-2 py-2">{{room.name}}</td>
                        <td class="px-2 py-2 ">
                            <span v-if="room.status == 1">Vacancy Avaiable</span>
                            <span v-else>Filled Up</span>
                        </td>
                        <td class="px-2 py-2 ">&#8358;{{formatMoney(room.price)}}</td>
                        <td class="px-2 py-2 ">{{room.type}}</td>
                        <td class="px-2 py-2 ">{{ room.capacity }}</td>
                        <td class="px-1 py-2 flex justify-center">
                            <button v-if="room.status == 1"
                            @click="$emit('show-bed', room.id)"
                            class="bg-blue-600 text-white rounded-full text-xs py-1 px-2 w-auto flex items-center justify-center mr-3">
                                <router-link to="/room">view</router-link>
                            </button>
                            <!-- <button @click="$emit('back-order', room.id)" v-if="showBackOrder" class="bg-green-600 text-white rounded-full text-xs py-1 px-2 w-auto flex items-center justify-center">
                                <router-link to="/room">Back Order</router-link>
                            </button> -->
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
        },
        floor: {
            type: Object
        }
    },
    methods: {
        formatMoney(money) {
            return Number(money).toLocaleString('en-US')
        },
        showBackOrder(bed) {
            this.$moment()
        }
    }
}
</script>