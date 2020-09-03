<template>
    <main class="">
        <div class="mt-32 grid grid-cols-6 ">
            <div class="col-start-2 col-span-4 h-auto ">
                <div class="bg-white grid grid-cols-3 shadow-2x">
                    <div class="col-span-1" id="leftImg">
                        <!-- <img class="" width="300" height="800" src="../assets/images/login.png" alt="unizik picture"> -->
                    </div>
                    <div class="col-span-2">
                        <div class="">
                            <p class="text-right p-10 pr-20">REGISTER</p>
                        </div>
                        <div class="px-40 grid grid-cols-7 mb-10">
                            <img src="../assets/images/uniziklogo.png" class="col-start-2 col-span-1 text-right" alt="unizik picture" width="30" height="50">
                            <h1 class="col-span-4 font-bold text-3xl mt-2 text-gray-700" >UNIZIK HOSTELS</h1>
                        </div>
                        <div class="px-40 ">
                            <p class="text-gray-600">
                                Register or Login to book a room for either yourself or your ward for the next academic session
                            </p>
                        </div>
                        <form class="px-40 pt-5" action="#" @submit.prevent>
                            <div class="field ">
                                <input class="text-gray-600 p-2" type="text" name="regNumber" id="regNumber" placeholder="2020364386">
                                <label for="regNumber" class="text-gray-600 p-1">Reg Number</label>
                            </div>
                            <div v-if="reqValidated" id="reqValidated">
                                <div class="field">
                                    <input class="text-gray-600 p-2" type="text" name="password" id="password" placeholder="*******">
                                    <label for="password" class="text-gray-600 p-1">Password</label>
                                </div>
                                <div class="field">
                                    <input class="text-gray-600 p-2" type="text" name="passwordVerify" id="passwordVerify" placeholder="*******">
                                    <label for="passwordVerify" class="text-gray-600 p-1">Confirm Password</label>
                                </div>
                            </div>
                            <div class="mt-10 mb-16 flex justify-end">
                                <button v-if="!reqValidated"  type="submit" @click="checkRegNumber()">
                                    Next
                                    <i class="fa fa-arrow-right text-orange-700"></i>
                                </button>
                                <button v-if="reqValidated"  type="submit" @click="register()">
                                    REGISTER
                                    <i class="fa fa-sign-in-alt text-orange-700"></i>
                                </button>
                            </div>
                        </form>
                        <div class="pl-8 mb-5">
                            <p class="text-gray-600">
                                Already have an account? 
                                <router-link to="/login">Login</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Footer from "@/components/Footer.vue"
export default {
    name: "Login",
    components: {
        Footer
    },
    data() {
        return {
            reqValidated: false,
        }
    },
    methods: {
        checkRegNumber() {
            console.log("Hello World");
            this.reqValidated = true;
        },
        register() {
            console.log("Hello World")
        }
    }
}
</script>

<style scoped>
    main{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        min-height:100vh;
        background: linear-gradient(rgba(26, 13, 1, 0.76), rgba(20, 10, 1, 0.856)), url('../assets/images/slide1.png');
        background-size:cover;
    }
    #leftImg{
        width: 100%;
        /* height: 100vh; */
        background: url('../assets/images/login.png');
        background-size:cover;
    }
    .field {
        display: flex;
        flex-flow: column-reverse;
        margin-bottom: 1em;
        /* border-left: 0; */
        /* transition: border-left 1s; */
    }
    .field:hover{
        border-left: 3px solid darkorange;
    }
    label, input {
        transition: all 0.2s;
        touch-action: manipulation;
        font-size: 0.9em;
    }

    input {
        font-size: 1.2em;
        border: 0;
        border-bottom: 1px solid #ccc;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 0;
        cursor: text;
    }

    input:focus {
        outline: 0;
        border-bottom: 1px solid #666;
    }

    label {
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    /**
    * Translate down and scale the label up to cover the placeholder,
    * when following an input (with placeholder-shown support).
    * Also make sure the label is only on one row, at max 2/3rds of the
    * field—to make sure it scales properly and doesn't wrap.
    */
    input:placeholder-shown + label {
        /* cursor: text; */
        max-width: 66.66%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: left bottom;
        transform: translate(0, 2.125rem) scale(1.5);
        
    }
    /**
    * By default, the placeholder should be transparent. Also, it should 
    * inherit the transition.
    */
    ::-webkit-input-placeholder {
        opacity: 0;
        transition: inherit;
    }
    /**
    * Show the placeholder when the input is focused.
    */
    input:focus::-webkit-input-placeholder {
        opacity: 1;
    }
    /**
    * When the element is focused, remove the label transform.
    * Also, do this when the placeholder is _not_ shown, i.e. when 
    * there's something in the input at all.
    */
    input:not(:placeholder-shown) + label,
    input:focus + label {
        transform: translate(0, 0) scale(1);
        cursor: pointer;
    }
</style>