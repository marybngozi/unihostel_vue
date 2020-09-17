<template>
    <section class="">
        <Header active="hostels" class="sticky top-0"/>
        <section class="mt-5 flex xs:flex-col lg:flex-row">
            <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0">
                <AsideLeft />
            </aside>
            <main class="lg:w-7/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-8 sm:mb-0 xs:order-first">
                <RoomDetails 
                v-if="display == 'room'"
                :room="room"
                @show-bed="showBed"
                @back-order="backOrder"/>

                <BedDetails 
                v-if="display == 'bed'"
                :bed="selectedBed"
                @show-room="showRoom"
                class="mt-5"/>

                <BackOrder 
                v-if="display == 'backOrder'"
                :bed="selectedBed"
                @show-room="showRoom"
                class="mt-5"/>

            </main>
            <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0 xs:order-last">
                <AsideRight />
            </aside>
        </section>
        <Footer />
    </section>
</template>

<script>
import Header from '@/components/Header.vue'
import RoomDetails from "@/components/BookRoom/RoomDetails.vue"
import BedDetails from "@/components/BookRoom/BedDetails.vue"
import BackOrder from "@/components/BookRoom/BackOrder.vue"
import AsideLeft from "@/components/AsideLeft.vue"
import AsideRight from "@/components/AsideRight.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Room',
    components: {
        Header,
        RoomDetails,
        BedDetails,
        BackOrder,
        AsideLeft,
        AsideRight,
        Footer
    }, 
    data() {
        return {
            display: 'room',
            roomId: null,
            selectedBed: null,
            room: {
                roomName: "A100",
                // roomPlan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599437871/Room_structure-big_yplsjp.png",
                roomPlan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599544670/Room_structure_csp8lb.png",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum reiciendis, dolor velit aliquid nam odio ipsa quia commodi labore tenetur nulla nisi obcaecati! Expedita error ipsam sint sapiente dignissimos!",
                noOfBeds: "4",
                beds: [
                    {
                        id: "123",
                        name: "bed1",
                        type: "bunk",
                        status: 1,
                        expiryDate: 0,
                        price: "30000",

                    },
                    {
                        id: "345",
                        name: "bed2",
                        type: "bunk",
                        status: 0,
                        expiryDate: 1637362800000,
                        price: "30000",

                    },
                    {
                        id: "678",
                        name: "bed3",
                        type: "single",
                        status: -1,
                        expiryDate: 1601247600000,
                        price: "30000",

                    },
                    {
                        id: "901",
                        name: "bed4",
                        type: "joined",
                        status: 1,
                        expiryDate: 0,
                        price: "30000",

                    },
                ]
            }
        }
    },
    beforeMount: function() {
        this.roomId = this.$route.params.roomid;
        // use roomId to get the room details and beds
        console.log(this.roomId);
    },
    methods: {
        showBed(bedId) {
            console.log(bedId);
            this.selectedBed = this.room.beds.find(bed => bed.id == bedId)
            this.display = 'bed'
        },

        showRoom() {
            this.display = 'room'
        },

        backOrder(bedId) {
            this.selectedBed = this.room.beds.find(bed => bed.id == bedId)
            this.display = 'backOrder'
            console.log(bedId);
        } 
    }
}
</script>