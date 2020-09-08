<template>
    <div>
        <h4 class="uppercase py-3">News Feeds</h4>
        <NewsFeeds />
    </div>
</template>

<script>
import NewsFeeds from "@/components/Asides/NewsFeeds.vue";
export default {
    name: "AsideLeft",
    components: {
        NewsFeeds
    }

}
</script>

<style>

</style>