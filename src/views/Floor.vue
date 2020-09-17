<template>
    <section>
        <Header active="hostels" class="sticky top-0"/>
        <section class="mt-5 flex xs:flex-col lg:flex-row">
            <aside class="lg:w-2/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0">
                <AsideLeft />
        </aside>
        <main class="lg:w-7/12 lg:flex-none lg:order-none xs:w-11/12 xs:mx-auto xs:mb-8 sm:mb-0 xs:order-first">
            <FloorDetails 
            :hostel="hostel"
            :floors="floors"
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
            hostelId: null, 
            hostel:{
                name: "Chike Okoli Hostel",
                description: "Quis voluptatum reiciendis, dolor velit aliquid nam odio ipsa quia commodi ",
                category: null,
                images: [
                    {
                        "url": "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        "title": "Front view"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                        "title": "Side view"
                    }
                ],
            },
            floors: [
                {
                    name: "Ground Floor",
                    plan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599891484/floor_plan_-_A_l0fixu.png",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum reiciendis, dolor velit aliquid nam odio ipsa quia commodi labore tenetur nulla nisi obcaecati! Expedita error ipsam sint sapiente dignissimos!",
                    noOfrooms: "4",
                    rooms: [
                        {
                            capacity: "4 Beds",
                            name: "A100",
                            type: "Single Buks",
                            status: 1,
                            price: "30000",

                        },
                        {
                            capacity: "8 beds",
                            name: "A101",
                            type: "bunk",
                            status: 0,
                            price: "25000",

                        },
                        {
                            capacity: "10 beds",
                            name: "A102",
                            type: "Double Bunks",
                            status: 0,
                            price: "20000",

                        },
                        {
                            capacity: "4 beds",
                            name: "A103",
                            type: "Single Beds",
                            status: 1,
                            price: "30000",

                        },
                    ]
                },
                {
                    name: "First Floor",
                    plan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599891485/floor_plan_-_B_gcbwba.png",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum reiciendis, dolor velit aliquid nam odio ipsa quia commodi labore tenetur nulla nisi obcaecati! Expedita error ipsam sint sapiente dignissimos!",
                    noOfrooms: "4",
                    rooms: [
                        {
                            capacity: "4 Beds",
                            name: "B100",
                            type: "Single Buks",
                            status: 1,
                            price: "30000",

                        },
                        {
                            capacity: "8 beds",
                            name: "B101",
                            type: "bunk",
                            status: 0,
                            price: "25000",

                        },
                        {
                            capacity: "10 beds",
                            name: "B102",
                            type: "Double Bunks",
                            status: 0,
                            price: "20000",

                        },
                        {
                            capacity: "4 beds",
                            name: "B103",
                            type: "Single Beds",
                            status: 1,
                            price: "30000",

                        },
                    ]
                },
                {
                    name: "Second Floor",
                    plan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599891484/floor_plan_-_A_l0fixu.png",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum reiciendis, dolor velit aliquid nam odio ipsa quia commodi labore tenetur nulla nisi obcaecati! Expedita error ipsam sint sapiente dignissimos!",
                    noOfrooms: "4",
                    rooms: [
                        {
                            capacity: "4 Beds",
                            name: "A100",
                            type: "Single Buks",
                            status: 1,
                            price: "30000",

                        },
                        {
                            capacity: "8 beds",
                            name: "A101",
                            type: "bunk",
                            status: 0,
                            price: "25000",

                        },
                        {
                            capacity: "10 beds",
                            name: "A102",
                            type: "Double Bunks",
                            status: 0,
                            price: "20000",

                        },
                        {
                            capacity: "4 beds",
                            name: "A103",
                            type: "Single Beds",
                            status: 1,
                            price: "30000",

                        },
                    ]
                },
                {
                    name: "Third Floor",
                    plan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599891485/floor_plan_-_B_gcbwba.png",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum reiciendis, dolor velit aliquid nam odio ipsa quia commodi labore tenetur nulla nisi obcaecati! Expedita error ipsam sint sapiente dignissimos!",
                    noOfrooms: "4",
                    rooms: [
                        {
                            capacity: "4 Beds",
                            name: "B100",
                            type: "Single Buks",
                            status: 1,
                            price: "30000",

                        },
                        {
                            capacity: "8 beds",
                            name: "B101",
                            type: "bunk",
                            status: 0,
                            price: "25000",

                        },
                        {
                            capacity: "10 beds",
                            name: "B102",
                            type: "Double Bunks",
                            status: 0,
                            price: "20000",

                        },
                        {
                            capacity: "4 beds",
                            name: "B103",
                            type: "Single Beds",
                            status: 1,
                            price: "30000",

                        },
                    ]
                },
            ]
        };
    },
    beforeMount: function() {
        this.hostelId = this.$route.params.hostelid;
        // use hostelId to get the hostel details and floors
        console.log(this.hostelId);
    }
}
</script>