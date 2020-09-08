<template>
    <section>
        <div v-for="(hostel, index) in hostels" :key="index" class="mb-10">
            <Hostel :hostel="hostel" class=""/>
        </div>
    </section>
</template>

<script>
import Hostel from "@/components/BookRoom/Hostel.vue"
export default {
    name: "Hostels",
    components: {
        Hostel
    },
    data() {
        return {
            hostels: [
                {
                    "name": "Chike Okoli Hostel",
                    "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nesciunt dicta provident aspernatur voluptates facere? Et, dolorum! Aspernatur laborum iure, laboriosam quam totam sit illo fuga temporibus! Perferendis, quibusdam perspiciatis!",
                    "capacity": 320,
                    "rating": 4,
                    "category": "storey",
                    "priceRange": "24000 - 30000", 
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                            "title": "Front view"
                        },
                        {
                            "url": "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                            "title": "Side view"
                        }
                    ]
                },
                {
                    "name": "Ngozi Okonjo Hostel",
                    "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nesciunt dicta provident aspernatur voluptates facere? Et, dolorum! Aspernatur laborum iure, laboriosam quam totam sit illo fuga temporibus! Perferendis, quibusdam perspiciatis!",
                    "capacity": 320,
                    "rating": 3,
                    "category": "storey",
                    "priceRange": "24000 - 30000", 
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1584091780978-1beeb2bec1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                            "title": "Front view"
                        }
                    ]
                },
                {
                    "name": "Chimamnda Hostel",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nesciunt, quia omnis veniam nihil reprehenderit pariatur nemo delectus odit cumque corrupti quisquam quasi eaque, iure sed enim accusamus provident vero?",
                    "capacity": 320,
                    "rating": 5,
                    "category": "bungalow",
                    "priceRange": "24000 - 30000", 
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                            "title": "Front view"
                        },
                        {
                            "url": "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                            "title": "Side view"
                        },
                        {
                            "url": "https://images.unsplash.com/photo-1521574873411-508db8dbe55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                            "title": "Top view"
                        },
                    ]
                },
            ]
        }
    },
}
</script>

<style>

</style>