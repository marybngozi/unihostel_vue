<template>
    <main class="flex justify-center items-center h-screen text-unihostelFont">
        <!-- <div class=""> -->
            <!-- <div class="h-auto "> -->
                <div class="bg-white shadow-2x xs:w-11/12 w-10/12 lg:w-8/12 md:flex mx-auto">
                    <div class="h-20 md:h-auto md:w-1/3 lg:w-1/3" id="leftImg">
                    </div>
                    <div class="p-5 md:w-2/3 lg:w-2/3">
                        <div class="">
                            <p class="text-right p-8 md:p-5 text-gray-600 font-regular">REGISTER</p>
                        </div>
                        <div class="flex justify-center space-x-2">
                            <img src="../assets/images/uniziklogo.png" class="text-right" alt="unizik picture" width="30" height="50">
                            <h1 class="font-bold text-2xl text-gray-700 mt-2">UNIZIK HOSTELS</h1>
                        </div>
                        <div class="mt-8">
                            <p class="text-gray-600">
                                Register or Login to book a room for either yourself or your ward for the next academic session
                            </p>
                        </div>
                        <form class="mt-5" action="#" @submit.prevent>
                            <div class="field">
                                <input class="text-gray-600" type="text" name="regNumber" id="regNumber" placeholder="2020364386">
                                <label for="regNumber" class="text-gray-600 p-2 text-xs font-thin">Reg Number</label>
                            </div>
                            <div v-if="reqValidated">
                                <div class="field">
                                    <input class="text-gray-600" type="text" name="password" id="password" placeholder="*******">
                                    <label for="password" class="text-gray-600 p-2 text-xs font-thin">Password</label>
                                </div>
                                <div class="field">
                                    <input class="text-gray-600" type="text" name="confirmPassword" id="confirmPassword" placeholder="*******">
                                    <label for="confirmPassword" class="text-gray-600 p-2 text-xs font-thin">Confirm Password</label>
                                </div>
                            </div>
                            <div class="flex justify-end mt-10">
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
                        <div class="mt-8">
                            <p class="text-gray-600">
                                Already have an account?  
                                <router-link to="/login">Login</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            <!-- </div> -->
        <!-- </div> -->
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
            formInfo: {
                regNumber: null,
                password: null,
                confirmPassword: null,
            }
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
        background: linear-gradient(rgba(26, 13, 1, 0.76), rgba(20, 10, 1, 0.856)), url('../assets/images/slide1.png');
        background-size: cover;
    }
    #leftImg{
        background: url('../assets/images/login.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .field {
        display: flex;
        flex-flow: column-reverse;
        margin-bottom: 1em;
    }
    .field:focus, .field:focus-within{
        border-left: 3px solid darkorange;
    }
    label, input {
        transition: all 0.2s;
        touch-action: manipulation;
    }

    input {
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