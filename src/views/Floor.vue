<template>
    <section>
        <Header active="hostels" class="sticky top-0"/>
        <section class="mt-5 flex xs:flex-col lg:flex-row">
            <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0">
                <AsideLeft />
        </aside>
        <main class="lg:w-7/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-8 sm:mb-0 xs:order-first">
            <FloorDetails 
            v-bind:hostelName="hostelName"
            v-bind:hostelDescription="hostelDescription"
            v-bind:category="category"
            v-bind:hostelImg="hostelImg"
            v-bind:floor="floor"
        />
        </main>
        <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0 xs:order-last">
                <AsideRight />
        </aside>
        </section>
        <Footer />
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import FloorDetails from "@/components/BookRoom/FloorDetails.vue";
import AsideLeft from "@/components/AsideLeft.vue";
import AsideRight from "@/components/AsideRight.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Floor",
    components: {
        Header,
        FloorDetails,
        AsideLeft,
        AsideRight,
        Footer
    },
    data() {
        return {
            hostelname: null,
            hostelDescription: null,
            category: null,
            hostelImg:  null,
            floor: {
                floor: "First Floor",
                // roomPlan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599437871/Room_structure-big_yplsjp.png",
                roomPlan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599544670/Room_structure_csp8lb.png",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum reiciendis, dolor velit aliquid nam odio ipsa quia commodi labore tenetur nulla nisi obcaecati! Expedita error ipsam sint sapiente dignissimos!",
                noOfrooms: "4",
                rooms: [
                    {
                        capacity: "4 Beds",
                        name: "RoomA1",
                        type: "Single Buks",
                        status: 1,
                        expiryDate: 0,
                        price: "30000",

                    },
                    {
                        capacity: "8 beds",
                        name: "RoomA2",
                        type: "bunk",
                        status: 0,
                        expiryDate: 1637362800000,
                        price: "25000",

                    },
                    {
                        capacity: "10 beds",
                        name: "RoomA3",
                        type: "Double Bunks",
                        status: 0,
                        expiryDate: 1601247600000,
                        price: "20000",

                    },
                    {
                        capacity: "4 beds",
                        name: "RoomA4",
                        type: "Single Beds",
                        status: 1,
                        expiryDate: 0,
                        price: "30000",

                    },
                ]
            }
        };
    },
    beforeMount: function() {
        this.hostelName = this.$route.params.hostelname;
        this.hostelDescription = this.$route.params.hostelDescription;
        this.category = this.$route.params.category;
        this.hostelImg = this.$route.params.hostelImg.url;
    }
}
</script>