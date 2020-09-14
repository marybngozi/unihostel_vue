<template>
    <div class="pb-3 overflow-hidden">
        <h2 class="flex justify-between uppercase font-bold my-5">
            <button 
            @click="$emit('show-room')"
            class="outline-none hover:outline-none focus:outline-none">
                <i class="fa fa-2x fa-long-arrow-alt-left"></i>
            </button>
            <span>Bed Details</span>
        </h2>
        
        <!-- Bed plan and description -->
        <div class="xl:w-4/6 md:w-3/6 xs:w-11/12 xs:mx-auto xs:mb-8">
            <h4 class="text-gray-00 text-sm uppercase">
                Name: 
                <span class="font-bold">
                    {{bed.name}}
                </span>
            </h4>
            <p class="text-sm text-gray-700 mt-3">
                <span class="uppercase">Bed Type: </span>
                <span class="font-bold uppercase">
                    {{bed.type}} BED
                </span>
            </p>
            <p class="text-sm text-gray-700 mt-3">
                <span class="uppercase">Amount to pay: </span>
                <span class="font-bold">
                    &#8358;{{formatMoney(bed.price)}}
                </span>
            </p>
            <p class=" text-sm mt-3 text-justify">
                <span class="uppercase text-sm text-gray-700">Period: </span>
                <span class=" font-semibold">
                    2020/2021 Academic Session 
                </span>
            </p>
        </div>

        <div class="xl:w-4/6 md:w-3/6 xs:w-11/12 xs:mx-auto xs:mb-8">
            <button class="bg-blue-600 text-white rounded space-x-2 text-xs p-4 w-48 h-10 flex items-center justify-center">
                <!-- on click check the person is logged in -->
                <span>Proceed to Payment</span>
                <span><i class="fa fa-arrow-right"></i></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "BedDetails",
    props: {
        bed: {
            type: Object
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
        bedDuration() {
            return new Date()
        }
    },
    methods: {
        formatMoney(money) {
            return Number(money).toLocaleString('en-US')
        }
    }

}
</script>