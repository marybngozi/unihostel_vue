<template>
    <div class="pb-3 overflow-hidden">
        <h2 class="flex justify-between uppercase font-bold my-5">
            <button 
            @click="$emit('show-room')"
            class="outline-none hover:outline-none focus:outline-none">
                <i class="fa fa-2x fa-long-arrow-alt-left"></i>
            </button>
            <span class="text-gray-700">Back Order {{bed.name}}</span>
        </h2>
        
        <!-- Back order description -->
        <div class="xl:w-4/6 md:w-3/6 xs:w-11/12 xs:mx-auto xs:mb-8">
            <p class="text-gray-400 mt-20 text-center">
                <i class="fa fa-10x fa-exclamation-triangle"></i><br>
                <span>Coming soon...</span>
            </p>
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