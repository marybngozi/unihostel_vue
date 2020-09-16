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
            hostelImg:  null
        };
    },
    beforeMount: function() {
        this.hostelName = this.$route.params.hostelname;
        this.hostelDescription = this.$route.params.hostelDescription;
        this.category = this.$route.params.category;
        this.hostelImg = this.$route.params.hostelImg.url;
        console.log(this.$route.params.hostelImg.url);
    }
}
</script>