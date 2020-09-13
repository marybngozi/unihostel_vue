<template>
    <div class="pb-3 overflow-hidden">
        <h2 class="text-center uppercase font-bold my-5">Room Details</h2>

        <!-- Room plan and description -->
        <div class="flex xs:flex-col md:flex-row">
            <!-- Room plan -->
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
            <table class="table table-auto mx-auto w-11/12 mb-10">
                <thead class="">
                    <tr class="text-xs text-left">
                        <th class="px-1 py-2">S/N</th>
                        <th class="px-2 py-2">BED</th>
                        <th class="px-2 py-2">Status</th>
                        <th class="px-2 py-2">Amount</th>
                        <th class="px-2 py-2">Days to Expiry</th>
                        <th class="px-1 py-2">Action</th>
                    </tr>
                </thead>
                <tbody class="">
                    <tr class="text-xs hover:bg-gray-100 border-b border-gray-200 py-10" v-for="(bed, i) in room.beds" :key="i">
                        <td class="px-1 py-2 ">{{ i+1 }}</td>
                        <td class="px-2 py-2 uppercase">{{bed.name}}</td>
                        <td class="px-2 py-2 ">
                            <span v-if="bed.status == 1">Empty</span>
                            <span v-else>Occupied</span>
                        </td>
                        <td class="px-2 py-2 ">&#8358;{{formatMoney(bed.price)}}</td>
                        <td class="px-2 py-2 ">{{ $moment(bed.expiryDate).fromNow() }}</td>
                        <td class="px-1 py-2">
                            <button v-if="bed.status == 1"
                            @click="$emit('show-bed', bed.id)"
                            class="bg-blue-600 text-white rounded text-xs py-1 px-2 w-auto flex items-center justify-center mr-3">
                                <router-link to="#">Book Bed</router-link>
                            </button>
                            <button @click="$emit('back-order', bed.id)" v-if="showBackOrder" class="bg-green-600 text-white rounded text-xs py-1 px-2 w-auto flex items-center justify-center">
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
    computed: {
        showBackOrder(bed) {
            console.log(bed);
            // Adds 15 days to today and checks if the backorder day has reached
            const result = this.$moment().add(15,'d').format('x');
            console.log(result > bed.expiryDate);
            console.log(bed.expiryDate);
            return (bed.status == 0 && result >= bed.expiryDate)? true: false;
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