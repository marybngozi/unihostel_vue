<template>
    <section class="">
        <Header active="bookroom" class="sticky top-0"/>
        <h2 class="text-center uppercase font-bold">Room</h2>
        <section class="mt-10 flex xs:flex-col md:flex-row">
            <aside class="md:w-2/12 md:flex-none md:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0">
                <AsideLeft />
            </aside>
            <main class="md:w-7/12 md:flex-none md:order-none xs:w-11/12 xs:mx-auto xs:mb-8 sm:mb-0 xs:order-first">
                <RoomDetails :room="room"/>
            </main>
            <aside class="md:w-2/12 md:flex-none md:order-none xs:w-11/12 xs:mx-auto xs:mb-10 sm:mb-0 xs:order-last">
                <AsideRight />
            </aside>
        </section>
        <Footer />
    </section>
</template>

<script>
import Header from '@/components/Header.vue'
import RoomDetails from "@/components/BookRoom/RoomDetails.vue"
import AsideLeft from "@/components/AsideLeft.vue"
import AsideRight from "@/components/AsideRight.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Room',
    components: {
        Header,
        RoomDetails,
        AsideLeft,
        AsideRight,
        Footer
    }, 
    data() {
        return {
            room: {
                roomName: "A100",
                // roomPlan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599437871/Room_structure-big_yplsjp.png",
                roomPlan: "https://res.cloudinary.com/dnbbhvcbt/image/upload/v1599544670/Room_structure_csp8lb.png",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum reiciendis, dolor velit aliquid nam odio ipsa quia commodi labore tenetur nulla nisi obcaecati! Expedita error ipsam sint sapiente dignissimos!",
                noOfBeds: "4",
                beds: [
                    {
                        name: "bed1",
                        status: 1,
                        price: "30000",

                    },
                    {
                        name: "bed2",
                        status: 0,
                        price: "30000",

                    },
                    {
                        name: "bed3",
                        status: 1,
                        price: "30000",

                    },
                    {
                        name: "bed4",
                        status: 1,
                        price: "30000",

                    },
                ]
            }
        }
    }
}
</script>