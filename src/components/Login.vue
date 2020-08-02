<template>
    <div>
        <ul>
            <li v-for="(user, index) in users" :key="index">{{user}}</li>
        </ul>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            users,
        }
    },
    mounted() {
        this.login()
    },
    methods: {
        login() {
            const baseURI = 'https://jsonplaceholder.typicode.com/users'
            this.$http.get(baseURI)
            .then((result) => {
                this.users = result.data
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>