<template>
    <div class="pb-3 overflow-hidden">
        <!-- Room plan -->
        <div class="flex xs:flex-col md:flex-row">
            <div class="xl:w-2/6 md:w-3/6 xs:w-11/12 md:justify-start xs:flex xs:justify-center xs:mx-auto xs:mb-8" >
                <img :src="room.roomPlan" :alt="room.roomName" style="height:23rem" class="object-contain object-top w-11/12" >
            </div>

            <!-- Room description -->
            <div class="xl:w-4/6 md:w-3/6 xs:w-11/12 xs:mx-auto xs:mb-8">
                <h4 class="text-gray-900 text-sm uppercase">
                    Name: Room
                    <span class="font-bold">
                        {{room.roomName}}
                    </span>
                </h4>
                <p class="text-sm text-gray-700 text-xs mt-3">
                    <span class="uppercase">Bed Space: </span>
                    <span class="font-bold">
                        {{room.noOfBeds}}
                    </span>
                </p>
                <p class=" text-xs mt-3 text-justify">
                    <span class="uppercase text-sm text-gray-700">Description: </span>
                    <span class="text-sm text-gray-600">
                        {{room.description}}
                    </span>
                </p>
            </div>
        </div>

        <!-- Room table -->
        <div class="">
            <table class="table table-auto mx-auto w-11/12">
                <thead class="">
                    <tr class="">
                        <th class="border px-4 py-2">S/N</th>
                        <th class="border px-4 py-2">BED</th>
                        <th class="border px-4 py-2">Status</th>
                        <th class="border px-4 py-2">Amount</th>
                        <th class="border px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody class="">
                    <tr :class="((i+1)%2 == 0)?'bg-gray-300':''" v-for="(bed, i) in room.beds" :key="i">
                        <td class="border px-4 py-2 ">{{ i+1 }}</td>
                        <td class="border px-4 py-2 uppercase">{{bed.name}}</td>
                        <td class="border px-4 py-2 ">
                            <span v-if="bed.status == 1">Empty</span>
                            <span v-else>Occupied</span>
                        </td>
                        <td class="border px-4 py-2 ">{{formatMoney(bed.price)}}</td>
                        <td class="border px-4 py-2 flex justify-center">
                            <button v-if="bed.status == 1" class="bg-blue-600 text-white rounded text-xs py-1 px-2 w-auto flex items-center justify-center mr-3">
                                <router-link to="#">Book Bed</router-link>
                            </button>
                            <button v-else class="bg-green-600 text-white rounded text-xs py-1 px-2 w-auto flex items-center justify-center">
                                <router-link to="#">Back Order</router-link>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "RoomDetails",
    props: {
        room: {
            type: Object
        }
    },
    data() {
        return {

        }
    },
    methods: {
        formatMoney(money) {
            return Number(money).toLocaleString('en-US', { style: 'currency', currency: 'NGN' })
        }
    }

}
</script>