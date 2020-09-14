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
                    "description": "All male hostel. Located near the main admin block",
                    "capacity": 320,
                    "rating": 4,
                    "category": "storey",
                    "priceRange": {
                        "from":"24000",
                        "to": "30000"
                    },
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
                    "description": "All female hostel. Located near the school main bus stop",
                    "capacity": 320,
                    "rating": 3,
                    "category": "storey",
                    "priceRange": {
                        "from":"24000",
                        "to": "30000"
                    }, 
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1584091780978-1beeb2bec1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                            "title": "Front view"
                        }
                    ]
                },
                {
                    "name": "Chimamnda Hostel",
                    "description": "Mixed hostel. Located between the school garden and auditorium",
                    "capacity": 320,
                    "rating": 5,
                    "category": "bungalow",
                    "priceRange": {
                        "from":"24000",
                        "to": "30000"
                    }, 
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